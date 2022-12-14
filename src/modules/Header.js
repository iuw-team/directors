import  { FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import React, { useEffect, useRef} from 'react';
import { LOCALES } from '../locales/locales';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DEFAULT_ICON_SIZE, getIcon, IconType } from './Services';
const languages = [
    {native: 'Русский', code: LOCALES.RUSSIAN},
    {native: 'English', code: LOCALES.ENGLISH}];

const DEFAULT_LOGO_SIZE = DEFAULT_ICON_SIZE;

export const Header = ({ currentLocale, handleFunc }) => {
  const handle = (event, index) => {
    console.log("Hello world");
  }
    const buttonRefs = useRef(new Array());
    const addToRefs = (e) => {
      if(e && !buttonRefs.current.includes(e)){
          buttonRefs.current.push(e);
      }
    }
    useEffect( () => {
      const arrHandleProc = new Array();

      buttonRefs.current.forEach( (element, index) => { 
          arrHandleProc.push( (event) =>{
              handleFunc(index)
          });
          element.addEventListener('click', arrHandleProc[index]);
        });
        return () => {
            buttonRefs.current.forEach((element, index) => {
                element.removeEventListener('click', arrHandleProc[index]);
            })
        }
    });
    return (
      <div className="header">
              <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            {getIcon(IconType.AppLogo,
                {
                  size: DEFAULT_LOGO_SIZE,
                  class: 'Brand-icon',
                  alt: 'Brand icon'
                }
              )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">
              <FormattedMessage id='mainTitle'></FormattedMessage>
            </Nav.Link>
            <Nav.Link href="#home">
              <FormattedMessage id='teamTitle'></FormattedMessage>
            </Nav.Link>
            <Nav.Link href="#link">
              <FormattedMessage id='articlesTitle'></FormattedMessage>
            </Nav.Link>
            <NavDropdown title={currentLocale} id="basic-nav-dropdown">
            { languages.map( ({native, code}) => (
               <NavDropdown.Item onClick={handleFunc}>
                {native}
                </NavDropdown.Item>
                ))
            }
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <div className="lang-switcher">
          <span><FormattedMessage id='langOption'></FormattedMessage></span>
          {/* <select onChange={handleFunc} value={currentLocale}>{
              languages.map( ({native, code}) => (
                <option key={code} value = {code}>{native}</option>
                ))
            }</select> */}
        </div>
        <div className='time-info'>
        </div>
      </div>
    )
  }