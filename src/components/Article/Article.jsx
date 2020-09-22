import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Article.css";

export default class Article extends Component {

    
  render() {
    const article = this.props.article;
    return (
      <div className="article-component">
        <Card>
          <Card.Body>
            <Card.Title className="title">{article.title}</Card.Title>
            <Card.Text className='description'> {article.description} </Card.Text>
            <Card.Text className="content">{article.content}</Card.Text>
            <Card.Text className="author "> Author: {article.author}</Card.Text>
            <Card.Text className="author">Published At: {article.publishedAt}</Card.Text>
          </Card.Body>
          <Card.Img
            variant="bottom"
            className="article-img"
            src={article.urlToImage}
          />
        <Button variant="primary" onClick={this.props.handleBack}>Go to main page</Button>
        </Card>
      </div>
    );
  }
}
