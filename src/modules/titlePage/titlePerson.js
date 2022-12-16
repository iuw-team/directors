import React from "react";
import { Card, ListGroup, Button, Container } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { getTitleImage, getTitleImageRef, PageType, setArticleId } from "../Services";

export const TitlePerson = ({authorId, handlePage}) => {
    const intl = useIntl();
    const arrNames = intl.messages['authorName'];
    const arrInfo = intl.messages['common_info'];
    const changePage = () => {
        handlePage({type: PageType.Article, index: authorId});
    }
    return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getTitleImageRef(authorId)} />

            <Card.Body>
            <Card.Title>{arrNames[authorId]}</Card.Title>
            <Card.Text>
                {arrInfo[authorId]}
            </Card.Text>
            </Card.Body>
            <Card.Footer><Button variant="primary" onClick={changePage} href={"/article" + parseInt(authorId)}><FormattedMessage id='far_jump'></FormattedMessage></Button></Card.Footer>
        </Card>
    );

}