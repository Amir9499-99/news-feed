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
        {this.props.articles.map((article, idx) => {
          return (
            <Card key={idx} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text> {article.description} </Card.Text>
                <Button onClick={(e) => { this.props.handleClick(e, article); }} variant="primary">View News</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}