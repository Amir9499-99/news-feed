import React, { Component } from "react";
import { Card, Button  } from "react-bootstrap";
import "./ListNews.css";

export default class ListNews extends Component {
  state = {
    articles: [],
  };

  render() {
    return (

      <div className="news-list">
        {this.props.articles.map((obj, idx) => {
          return (
            <Card key={idx} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={obj.urlToImage} />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text> {obj.description} </Card.Text>
                <Button onClick={(e) => { this.props.handleClick(e); }} variant="primary">View News</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
