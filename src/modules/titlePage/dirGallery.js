import React from "react";
import { Card, Container, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";
import { TitlePerson } from "./titlePerson";
import { FormattedDate, FormattedMessage, useIntl } from "react-intl";

export const DirectoryGallery = ({handlePage}) => {
    const intl = useIntl();
    const arrDirectors = intl.messages['authorName'];
    const arrPreInfo = intl.messages['articlePreInfo'];
    return(
        <Container className='mb-2'>
            <div className='display-2 text-center'>
            <FormattedMessage id='articlesTitle'></FormattedMessage>
            </div>
            
                <ListGroup>
                {arrDirectors.map( (name, index) => (
                    <ListGroupItem>
                        <Row xs={1} md={3} className="g-4">
                            <Col>
                            <TitlePerson authorId={index} handlePage={handlePage}></TitlePerson>            
                            </Col>
                            <Col>
                                <Card >
                                <Card.Body>
                                <Card.Title><FormattedMessage id='articleAbout'/></Card.Title>
                                <Card.Text>
                                    {arrPreInfo[index]}
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                        <br/>
                    </ListGroupItem>
                ))}
                </ListGroup>
            
            
            
        </Container>
    )
}