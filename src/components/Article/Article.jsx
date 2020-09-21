import React, { Component } from "react";

export default class Article extends Component {

  render() {
    return(
      <ul>
       {this.props.articles.map((obj, idx) => {
          return <li key={idx}>{obj.title}</li>;
         })}
      </ul>
    );
  }
}
