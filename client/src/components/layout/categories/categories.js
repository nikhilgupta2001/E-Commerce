import React from 'react';
import axios from 'axios';
import classes from './categories.css';
import {Container,Row,Col} from 'react-bootstrap';

const categories=(props)=>
{
    return(
        <div>
  <Container>
    <Row className={classes.col}>
    <Col><img src="./images/Footwear.webp" className={classes.img} alt="img"></img></Col>
     <Col><img src="./images/Dresses.webp" className={classes.img}></img></Col>
     <Col><img src="./images/Dresses2.webp" className={classes.img}></img></Col>
    </Row>
    <Row className={classes.col}>
     <Col><img src="./images/Kurta.webp" className={classes.img}></img></Col>
     <Col><img src="./images/jeans.webp" className={classes.img}></img></Col>
     <Col><img src="./images/Sarees.webp" className={classes.img}></img></Col>
    </Row>
    <Row className={classes.col}>
    <Col><img src="./images/Handbags.webp" className={classes.img}></img></Col>
     <Col><img src="./images/T-shirt.webp" className={classes.img}></img></Col>
     <Col><img src="./images/Tops.webp" className={classes.img}></img></Col>
    </Row>
   </Container> 
        </div>
);
}


export default categories;


