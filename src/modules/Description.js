import './description-small.css';

import  { useIntl, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import React from 'react';
import { Table, Card, ButtonGroup, Button, Container, Col, Row} from 'react-bootstrap';
import { getArticleCnt, getArticleId, getTitleImageRef, getTitleImage, PageType, setArticleId } from './Services';
import { FormatError } from 'intl-messageformat';
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import { Link } from 'react-router-dom';
export const Description = ({authorId, handlePage}) => {
    const intl = useIntl();
    const arrAuthorName = intl.messages['authorName'];
    const arrBirthDate  = intl.messages['birthDate'];
    const arrDeathDate  = intl.messages['deathDate'];
    const arrProfType   = intl.messages['profType'];
    const handleNextPage = () => {
        let nextId = (authorId + 1) < getArticleCnt() ? authorId + 1 : authorId;
        handlePage({type: PageType.Article, index: nextId});
    }
    const handlePrevPage = () => {
        // let currId = getArticleId();
        // if(currId > 0)
        //     setArticleId(currId - 1);
        let prevId =  (authorId > 0) ? authorId - 1 : authorId;
        handlePage({type: PageType.Article, index: prevId});
    }
    return(
        <Container>
                <ButtonGroup className="switch-button__container" >
                    <Button as={Link} to={"/article" + parseInt((authorId > 0) ? authorId - 1 : authorId)} className="switch-button__button" size='lg' onClick={handlePrevPage}>
                        <FormattedMessage id='prevButton'></FormattedMessage>
                    </Button>
                    <Button as={Link} to={"/article" + parseInt((authorId + 1) < getArticleCnt() ? authorId + 1 : authorId)} className="switch-button__button" size='lg' onClick={handleNextPage}>
                        <FormattedMessage id='nextButton'></FormattedMessage>
                    </Button>
                </ButtonGroup>
                <div className='common-info-contatiner d-flex'>
                <Card>
                    <Card.Body>
                        <Table className='common-info' striped='columns'>
                    <tbody>
                    <tr>
                      <th className="common-info__title" colSpan="2">{arrAuthorName[authorId]}</th>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Card.Img className='me-auto'src={getTitleImageRef(authorId)}></Card.Img>
                        </td>
                        
                    </tr>
                    <tr>
                        <th className="common-info__text common-info__text-title" scope="row">
                            <FormattedMessage id="birthDateTitle"></FormattedMessage> 
                        </th>
                        <td className="common-info__text common-info__text-info">
                            {arrBirthDate[authorId]}
                        </td>
                    </tr>
                    <tr>
                        <th className="common-info__text common-info__text-title" scope="row">
                            <FormattedMessage id="deathDateTitle"></FormattedMessage> 
                        </th>
                        <td className="common-info__text common-info__text-info">
                            {arrDeathDate[authorId]}
                        </td>
                    </tr>
                    <tr>
                        <th className="common-info__text common-info__text-title" scope="row">
                            <FormattedMessage id='profTitle'></FormattedMessage>
                        </th>
                        <td className="common-info__text common-info__text-info">{arrProfType[authorId]}</td>
                    </tr>
                </tbody>
            </Table>
 
                    </Card.Body>
                </Card>
               </div>
        </Container>
      
    )
}