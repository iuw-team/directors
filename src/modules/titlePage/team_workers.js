import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Card, CardImg, Container, Image, Row, Col} from "react-bootstrap";
import { getTeamImgRef } from "../Services";

export const TeamWorkers = () => {
    const intl = useIntl();
    const arrMembers = intl.messages['teamMembers'];
    const arrMembersImg = getTeamImgRef();
    return (
        <Card className="">
            <Card.Title>
                <Card.Header className='display-4 text-center'>
                    <FormattedMessage id='teamTitle'/>
                </Card.Header>
            </Card.Title>
            <Card.Body>
            <Row xs={1} md={3} className="g-4">
            {arrMembers.map( (member, index) => (
                <Col>
                <Card>
                    <CardImg src={arrMembersImg[index]} rounded='true'>

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
            </Card.Body>
        </Card>

 
    );
}