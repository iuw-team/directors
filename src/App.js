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
import {Footer} from './modules/Footer';
import { getArticleId, getArticleCnt} from './modules/Services';
import { DirectoryGallery } from './pages/dirGallery';

import { PageType } from './modules/Services';

import {MainPage} from './pages/mainPage';
import {Article} from './pages/article'
import { useParams, BrowserRouter, Link, Router, Routes, Route, HashRouter, Switch, useLocation} from 'react-router-dom';
function App() {
const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale');
  return (savedLocale || LOCALES.ENGLISH);
}
const [currLocale, setCurrLocale] = useState(getInitialLocale());
const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

const handleChangePage = (pageInfo) => {
//  localStorage.setItem('pageInfo', JSON.stringify(pageInfo));
 // setPageInfo(pageInfo);
 // setPath(pageInfo);
}

const handleChangeLang = (value) =>{
    setCurrLocale(value);
    localStorage.setItem('locale', value)
};
return (
    <IntlProvider messages={messages[currLocale]} locale = {currLocale} defaultLocale = {LOCALES.ENGLISH}>
    <Header currentLocale={currLocale} handleFunc={handleChangeLang}  handlePage={handleChangePage}></Header>
      <Routes>
        <Route path='/' element={<MainPage handlePage={handleChangePage}/>}></Route>
        <Route path='/directors' element={<DirectoryGallery handlePage={handleChangePage}/>}></Route>
        {Array.from({length: getArticleCnt()}, (_, index) =>(
          <Route path= {'/article' + parseInt(index)} element={<Article authorId={index} handlePage={handleChangePage}></Article>}></Route>
        ))}
      </Routes>
    <Footer></Footer>
    </IntlProvider>

  );
}

export default App;
