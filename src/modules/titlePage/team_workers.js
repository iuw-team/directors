import React from "react";
import { useIntl } from "react-intl";
import { Card, CardImg, Container, Image, Row, Col} from "react-bootstrap";

export const TeamWorkers = () => {
    const intl = useIntl();
    const arrMembers = intl.messages['teamMembers'];
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
            {arrMembers.map( (member, index) => (
                <Col>
                <Card>
                    <CardImg>

                    </CardImg>
                    <Card.Body>
                        <Card.Title className='dispay-4'>
                            {member.name}
                        </Card.Title>
                        <Card.Text>
                            {member.info}
                        </Card.Text>

                    </Card.Body>
                </Card>
                </Col>

                ))
            }       
            </Row>
        </Container>

 
    );
}