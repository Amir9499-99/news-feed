import React, { Component } from "react";
import { Card } from "react-bootstrap";


export default class Article extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </div>
    );
  }
}
