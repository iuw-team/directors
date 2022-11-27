import  { FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import React from 'react';
import {useState} from 'react';
import { LOCALES } from './locales/locales';

const langList = [
    {native: 'Русский', code: LOCALES.RUSSIAN},
    {native: 'English', code: LOCALES.ENGLISH}];

export const Header = ({ currentLocale, handleFunc }) => {
  let listTitle = "Langs"
    return (<div className="switcher">
        <span>{listTitle} </span>
        <select onChange={handleFunc} value={currentLocale}>{
            langList.map( ({native, code}) => (
              <option key={code} value = {code}>{native}</option>
              )
              )
          }</select>
      </div>
    )
  }