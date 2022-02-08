import './App.css';

import { isArrayEmpty } from './Utils';

import BlogCard from './BlogCard';
import React from 'react';

class App extends React.Component {

  state = {
    showBlogs: true,
    blogArr: [
      {
        id: 1,
        title: 'Blog Title 1',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      }
    ]
  };

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr: updatedBlogList});
  };

  blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
    return (
      <BlogCard key={item.id} title={item.title} description={item.description} id={item.id} likeCount={item.likeCount} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
    );
  });

  onHideBtnClick = () => {
    // fist variant of setState
    // let updatedState = !this.state.showBlogs;
    // this.setState({showBlogs: updatedState});
    // second variant of setState
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs };
    });
  };

  render() {
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard key={item.id} title={item.title} description={item.description} id={item.id} likeCount={item.likeCount} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
      );
    });

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br />
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default App;
