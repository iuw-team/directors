//import externla source file
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import {Header} from './modules/Header'
import React from 'react';

import  { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import {LOCALES} from './locales/locales';
import {messages} from './locales/messages';
import {useState} from 'react'
import { Milestones } from './modules/Milestones';
import { Description } from './modules/Description';
import { Gallery } from './modules/TestGallery';
import { MapPoints } from './modules/Mapway';
import {Footer} from './modules/Footer';

function App() {
const locale = LOCALES.ENGLISH;
const [currLocale, setCurrLocale] = useState(locale);

const handleFunc = ({ target: {value} }) =>{
      setCurrLocale(value);
};
  return (
    <IntlProvider messages={messages[currLocale]} locale = {currLocale} defaultLocale = {LOCALES.ENGLISH}>
    <Header currentLocale={currLocale} handleFunc={handleFunc}></Header>
    <Description authorId = {0}></Description>
    <Milestones></Milestones>
    <Gallery authorId= {0}></Gallery>
    <MapPoints authorId= {0}></MapPoints>
    <Footer></Footer>
    </IntlProvider>
  );
}

export default App;
