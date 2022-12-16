import React from "react";
import { Container } from "react-bootstrap";
import { Description } from "../modules/Description";
import { Milestones } from "../modules/Milestones";
import { Gallery } from "../modules/TestGallery";
import { MapPoints } from "../modules/Mapway";
export const Article = ({authorId, handlePage}) => {
    
    return (
        <Container>
            <Description authorId = {authorId} handlePage={handlePage}></Description>
            <Milestones authorId={authorId}></Milestones>
            <Gallery authorId= {authorId}></Gallery>
            <MapPoints authorId= {authorId}></MapPoints>
        </Container>

    )
}