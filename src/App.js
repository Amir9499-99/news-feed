import React, { Component } from 'react';
import Article from './components/Article/Article'
import ListNews from './components/ListNews/ListNews'
import { getAllNews } from "./services/news-api";
import './App.css';

export default class App extends Component {
  state = {
    news: []
  }

  async componentDidMount(){
  const news = await getAllNews();
  this.setState({ news: news.articles });
  console.log('this is state',this.state.news)
  }

  render(){
    return (
      <div className="App">
        <Article articles={this.state.news}/>
        <ListNews/>
      </div>
    )
  }
}

