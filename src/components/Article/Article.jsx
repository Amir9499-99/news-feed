import React, { Component } from "react";

export default class Article extends Component{
    state = {
        articles: this.props.articles
    }

    const mappedArticles = this.state.articles.articles.map((article) => {
        return <div  key={article.source.name}>{article.title}</div>
    }

    render(){
        return(
            <h1> Hello Ji</h1>
            <div> {mappedArticles} </div>
        );
        
    }
  }
