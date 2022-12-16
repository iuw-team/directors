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
import { DirectoryGallery } from './pages/dirGallery';

import { PageType } from './modules/Services';
import { TeamWorkers } from './modules/titlePage/team_workers';
import {MainPage} from './pages/mainPage';
import {Article} from './pages/article'
import { useParams, BrowserRouter, Link, Router, Routes, Route} from 'react-router-dom';
function App() {
const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale');
  return (savedLocale || LOCALES.ENGLISH);
}
const [currLocale, setCurrLocale] = useState(getInitialLocale());
//const [pageType, setPageType] = useState(PageType.Main);
const handleChangePage = (pageType) => {
  // setPageType(pageType);
  if(pageType == PageType.Article)
      window.location.href = '/directors/article' + parseInt(getArticleId());    
}

const handleChangeLang = (value) =>{
    setCurrLocale(value);
    localStorage.setItem('locale', value)
};

return (
    <IntlProvider messages={messages[currLocale]} locale = {currLocale} defaultLocale = {LOCALES.ENGLISH}>
    <Header currentLocale={currLocale} handleFunc={handleChangeLang}  handlePage={handleChangePage}></Header>
    <BrowserRouter>
      <Routes>
        <Route path='/directors' element={<MainPage handlePage={handleChangePage}/>}></Route>
        <Route path='/directors/gallery' element={<DirectoryGallery handlePage={handleChangePage}/>}></Route>
        {Array.from({length: getArticleCnt()}, (_, index) =>(
          <Route path= {'/directors/article' + parseInt(index)} element={<Article authorId={index} handlePage={handleChangePage}></Article>}></Route>
        ))}
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </IntlProvider>


  );
}

export default App;
