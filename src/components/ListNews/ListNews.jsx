import React, { Component } from "react";
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export default class ListNews extends Component {
    state = {
        articles: []
    }

  render() {
      console.log(this.props)
       
        return (

        <div>
        {this.props.articles.map((obj, idx) => {
                return (
        <Card key={idx} style={{ width: "18rem" }}>
            <Card.Img  variant="top" src={obj.urlToImage}/>
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text> {obj.description} </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
        </Card>
         )})
         }
        </div>
        );
}
}