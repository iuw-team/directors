//import externla source file
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import {Header} from './modules/Header'
import React, { useEffect } from 'react';

import  { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import {LOCALES} from './locales/locales';
import {messages} from './locales/messages';
import {useState} from 'react'
import { Milestones } from './modules/Milestones';
import { Description } from './modules/Description';
import { Gallery } from './modules/TestGallery';
import { MapPoints } from './modules/Mapway';
import {Footer} from './modules/Footer';
import { getArticleId, getArticleCnt} from './modules/Services';
import { TitlePerson } from './modules/titlePage/titlePerson';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { DirectoryGallery } from './modules/titlePage/dirGallery';

import { PageType } from './modules/Services';
import { TeamWorkers } from './modules/titlePage/team_workers';
function App() {
const locale = LOCALES.ENGLISH;
const arrLocales = [LOCALES.ENGLISH, LOCALES.RUSSIAN]
const [authorId, setAuthorId] = useState(getArticleId());
const [currLocale, setCurrLocale] = useState(locale);
const [pageType, setPageType] = useState(PageType.Main);
const handleChangePage = (pageType) => {
  setPageType(pageType);
  if(pageType == PageType.Article)
    setAuthorId(getArticleId());
}
const handleFunc = (value) =>{
    setCurrLocale(value);
};
useEffect(() => {
  window.scrollTo(0,0);
})
const dayAuthorId = (Math.floor(Math.random() * 10)) % getArticleCnt();
  return (
    <IntlProvider messages={messages[currLocale]} locale = {currLocale} defaultLocale = {LOCALES.ENGLISH}>
    <Header currentLocale={currLocale} handleFunc={handleFunc}  handlePage={handleChangePage}></Header>
    {pageType == PageType.Main && (
      <Container>
        <Card className="text-center">
          <Card.Title>
            <Card.Header className='display-4'>
              <FormattedMessage id='about_us'/>
            </Card.Header>
          </Card.Title>
          <Card.Body className='display-5'>
          <blockquote className="blockquote mb-0">
          <p>
            {' '}<FormattedMessage id='about_us_info'/>{' '}
          </p>
          <footer className="blockquote-footer">
            <FormattedMessage id='about_us_source'/>
          </footer>
        </blockquote>
          </Card.Body>
        </Card>
        <Card className='d-flex justify-content-center'>
          <Card.Title className='text-center'>
            <Card.Header className='display-4'>
              <FormattedMessage id='dayAuthorTitle'/>
            </Card.Header>
            <Card.Body className='d-flex justify-content-center'>
                <TitlePerson authorId={dayAuthorId} handlePage={handleChangePage}></TitlePerson>
            </Card.Body>
          </Card.Title>
        </Card>
        <TeamWorkers></TeamWorkers>
      </Container>
      
    )}
    {pageType == PageType.Article && (
        <div>
    <Description authorId = {authorId} handlePage={handleChangePage}></Description>
    <Milestones authorId={authorId}></Milestones>
    <Gallery authorId= {authorId}></Gallery>
    <MapPoints authorId= {authorId}></MapPoints>
        </div>
    )}
    {pageType == PageType.Directors && (
      <DirectoryGallery handlePage={handleChangePage}></DirectoryGallery>
    )}
    <Footer></Footer>
    </IntlProvider>
  );
}

export default App;
