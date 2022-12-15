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
import { getArticleId } from './modules/Services';
import { Container } from 'react-bootstrap';
const MainPage = (handleArticleFunc) => {
return (
    <Container>
        <Footer></Footer>
    </Container>

  );
}