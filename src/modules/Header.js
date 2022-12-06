import  { FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import React from 'react';
import { LOCALES } from '../locales/locales';
import {messages} from '../locales/messages';

const languages = [
    {native: 'Русский', code: LOCALES.RUSSIAN},
    {native: 'English', code: LOCALES.ENGLISH}];

export const Header = ({ currentLocale, handleFunc }) => {
    return (
      <div className="header">
        <div className="lang-switcher">
          <span><FormattedMessage id='langOption'></FormattedMessage></span>
          <select onChange={handleFunc} value={currentLocale}>{
              languages.map( ({native, code}) => (
                <option key={code} value = {code}>{native}</option>
                ))
            }</select>
        </div>
        <div className='time-info'>
        </div>
      </div>
    )
  }