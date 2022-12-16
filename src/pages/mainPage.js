import React from "react";
import {Card, Container } from 'react-bootstrap';
import { FormattedMessage } from "react-intl";
import { TeamWorkers } from "../modules/titlePage/team_workers";
import { TitlePerson } from "../modules/titlePage/titlePerson";
import { getArticleCnt } from "../modules/Services";
import { Footer } from "../modules/Footer";
import { Header } from "../modules/Header";
export const MainPage = ({handlePage}) =>
{
    const dayAuthorId = (Math.floor(Math.random() * 10)) % getArticleCnt();
    return(
        <Container>
        <Card className="text-center">
        <Card.Title>
            <Card.Header className='display-4'>
            <FormattedMessage id='about_us'/>
            </Card.Header>
        </Card.Title>
        <Card.Body className='display-5'>
        <blockquote className="blockquote mb-0">
        <p>
            {' '}<FormattedMessage id='about_us_info'/>{' '}
        </p>
        <footer className="blockquote-footer">
            <FormattedMessage id='about_us_source'/>
        </footer>
        </blockquote>
        </Card.Body>
        </Card>
        <Card className='d-flex justify-content-center'>
        <Card.Title className='text-center'>
            <Card.Header className='display-4'>
            <FormattedMessage id='dayAuthorTitle'/>
            </Card.Header>
            <Card.Body className='d-flex justify-content-center'>
            <TitlePerson authorId={dayAuthorId} handlePage={handlePage}/>
            </Card.Body>
        </Card.Title>
        </Card>
        <TeamWorkers></TeamWorkers>
        </Container>
    );
}
