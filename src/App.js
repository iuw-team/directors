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
import { getArticleId } from './modules/Services';
import { TitlePerson } from './modules/titlePage/titlePerson';
import { Container } from 'react-bootstrap';
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
  return (
    <IntlProvider messages={messages[currLocale]} locale = {currLocale} defaultLocale = {LOCALES.ENGLISH}>
    <Header currentLocale={currLocale} handleFunc={handleFunc}  handlePage={handleChangePage}></Header>
    {pageType == PageType.Main && (
      <Container>
        <Container className='d-flex justify-content-center'>
        <TitlePerson authorId={0} handlePage={handleChangePage}></TitlePerson>
        </Container>
          <TeamWorkers></TeamWorkers>
      </Container>
      
    )}
    {pageType == PageType.Article && (
        <div>
        <Description authorId = {authorId}></Description>
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
