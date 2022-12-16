import React from "react";
import { Card, ListGroup, Overlay } from "react-bootstrap";
export const Tiplist = ({parent, items, handleFunc}) => {
    let parentWidth;
    if(parent != null)
        parentWidth = parseInt(parent.offsetWidth);
    else
        parentWidth = 'fit-content';
    return(
        <Overlay show={true} target={parent} placement='bottom'>
        <Card style={{width: parentWidth}} bg='secondary'>
         {items.length > 0 && (
        <ListGroup variant="flush">
            {items.map( (value, index) => (
                <ListGroup.Item            
                onClick={() => handleFunc(value)}
                key={index}>
                {value}
                </ListGroup.Item>
            ))}
            
          </ListGroup>
      )}
        </Card>
        </Overlay>

    );
}