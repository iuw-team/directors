//import externla source file
import logo from './logo.svg';
import WorkIcon from './icons/student.svg'
import StudentIcon from './icons/student.svg'
import CommitmentIcon from './icons/handshake.svg';
import AwardIcon from './icons/award.svg'
import MonumentIcon from './icons/monument.svg'

import './App.css';
import {Header} from './translator'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import  { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import {LOCALES} from './locales/locales';
import {messages} from './locales/messages';
import {useState} from 'react'
const DEFAULT_ICON_SIZE = 40;


function getIcon(iconName, iconSize = DEFAULT_ICON_SIZE){
  return(
    <img src = {iconName} 
    style={{ width: iconSize, height: iconSize}} 
    alt="Unknown error"/>
  )
}

function App() {
const locale = LOCALES.ENGLISH;
const [currentLocale, setCurrentLocale] = useState(locale);

const langList = [
  {native: 'Русский', code: LOCALES.RUSSIAN},
  {native: 'English', code: LOCALES.ENGLISH}];

const handleFunc = ({target: {value} }) =>{
    setCurrentLocale(value);
}
function getOptionList(mapList, listTitle, className = "switcher"){
  return(<div className={className}>
    <span>{listTitle} </span>
    <select onChange={handleFunc} value={currentLocale}>{
        mapList.map( ({native, code}) => (
          <option key={code} value = {code}>{native}</option>
          )
          )
      }</select>
  </div>
  )
}
  
  return (
    <IntlProvider messages={messages[locale]} locale = {locale} defaultLocale = {LOCALES.ENGLISH}>
      <div>
      <Header currentLocale={currentLocale} handleFunc={handleFunc}></Header>
      </div>
      <FormattedDate
      value = {Date.now()}
      year="numeric"
      month="long"
      day="2-digit"/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><FormattedMessage id='title'></FormattedMessage></h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <VerticalTimeline
      lineColor={'red'}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--legacy"
          date="1961 - 1967"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(12, 34, 98)'}}
          //icon={<img src ={MonumentIcon}/>}
          icon={getIcon(MonumentIcon)}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1961 - 1967"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={getIcon(CommitmentIcon)}
        >
          <h3 className="vertical-timeline-element-title">Рассказы о молодости</h3>
          <p className="vertical-timeline-element-info">
            Возглавляет студию молодых кинематографистов "Рассказы о молодости", активно сотрудничает
            с Беларусьфильмом.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1945 - 1967"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={getIcon(WorkIcon)}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            Работает на московских киностудиях
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src ={WorkIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src ={WorkIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src ={WorkIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src ={WorkIcon} />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Desi gn
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={getIcon(WorkIcon)}
        />
      </VerticalTimeline>
    </div>
    </IntlProvider>
  );
}

export default App;
