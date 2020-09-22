import React, { Component } from "react";
import Article from "./components/Article/Article";
import ListNews from "./components/ListNews/ListNews";
import { Switch, Route, withRouter } from "react-router-dom";
import { getAllNews } from "./services/news-api";
import "./App.css";

class App extends Component {
  state = {
    news: [],
    article: [],
  };

  async componentDidMount() {
    const news = await getAllNews();
    this.setState({ news: news.articles });
    console.log("this is state", this.state.news);
  }

  handleCLick = async (e, article) => {
    e.preventDefault();
    let articleValue = await article;
    this.setState({ article: articleValue });
    this.props.history.push("/article");
  };

  handleBack = () => {
    this.props.history.push("/");
    }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ListNews
              articles={this.state.news}
              handleClick={this.handleCLick}
            />
          </Route>
          <Route exact path="/article">
            <Article article={this.state.article} handleBack={this.handleBack} />;
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
