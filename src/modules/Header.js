import  { FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import React, { useState, useMemo, useCallback, useEffect, useRef} from 'react';
import {useIntl} from 'react-intl';
import { LOCALES } from '../locales/locales';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button, } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DEFAULT_ICON_SIZE, getIcon, getLangIcon, getLangIconRef, IconType, setArticleId } from './Services';
import { findAllInRenderedTree } from 'react-dom/test-utils';
const languages = [
    {native: 'English', code: LOCALES.ENGLISH},
    {native: 'Русский', code: LOCALES.RUSSIAN}];

const DEFAULT_LOGO_SIZE = DEFAULT_ICON_SIZE;

export const Header = ({ currentLocale, handleFunc, handleRender}) => {
  const getLangNative = () => {
      let currLang = languages.find( (value) => value.code === currentLocale)
      if(!currLang)
        currLang.native = LOCALES.ENGLISH;
      return currLang.native
  }
    const intl = useIntl();
    const searchRef = useRef(null);
    const arrDirectors = intl.messages['authorName'];
    const [searchTips, setSearchTips] = useState([]);
    const handleSearhPage = () => {
        let fullName = searchRef.current.value;
        let authorId = arrDirectors.indexOf(fullName);
        if(authorId == -1){
          alert("No such author");
          return;
        }
        setArticleId(authorId);
        handleRender();
    }
    const findSimilar = (inputName) => {
        return arrDirectors.filter(fullName => fullName.includes(inputName));
    }
    const handleTintClick = useCallback((value) => {
      searchRef.current.value = value;
    }, [searchRef]);

    const handleInputChange = () => {
      const inputVal = searchRef.current.value;
      if(inputVal.length < 1)
        setSearchTips([])
      else
        setSearchTips(findSimilar(inputVal));
    }
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
        <Navbar.Collapse className="d-flex justify-content-center" id="basic-navbar-nav">
          <Nav className="">
          <Nav.Link href="#">
              <FormattedMessage id='mainTitle'></FormattedMessage>
            </Nav.Link>
            <Nav.Link href="#team">
              <FormattedMessage id='teamTitle'></FormattedMessage>
            </Nav.Link>
            <Nav.Link href="#directors">
              <FormattedMessage id='articlesTitle'></FormattedMessage>
            </Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-auto"
              aria-label="Search"
              ref={searchRef}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" onClick={handleSearhPage}>Search</Button>
          </Form>
          <Nav.Item className='d-flex align-items-center ms-3'>
          <NavDropdown 
            title={getLangNative()}
            id="basic-nav-dropdown"
            onSelect={handleFunc}
            className='me-2'
            >
            { languages.map( ({native, code}) => (
               <NavDropdown.Item key={code} eventKey={code}>
                {native}
                </NavDropdown.Item> 
               
                ))
            }
            </NavDropdown>
            <Nav.Item className='mx-auto'>
            {getLangIcon(currentLocale)}
            </Nav.Item> 
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <>
      {searchTips.length > 0 && (
        <ul>
          {searchTips.map( (fullName, index) => (
            <li
            onClick={() => handleTintClick(fullName)}
            key={index}>
            {fullName}
          </li>
          ))}
        </ul>
      )}
    </>
      </div>
    )
  }