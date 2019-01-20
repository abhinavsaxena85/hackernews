import React, { Component } from "react";
import { NewsRow } from "./newsrow";
import NewsService from "../service/api/newsService";

class TopNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsFeed: [],
      pageIndex: 0,
      pageSize: 20
    };
  }

  componentDidMount() {
    this.loadNews(this.state.pageIndex, this.props.match.params.news_type);
  }

  fetchMore(flag) {
    let pageIndex = flag ? this.state.pageIndex + 1 : this.state.pageIndex - 1;
    this.setState({ pageIndex: pageIndex });
    this.loadNews(pageIndex, this.props.match.params.news_type);
  }

  upVoteStory = storyId => {
    const updatedStories = NewsService.upVoteStory(storyId);
    this.setState({ newsFeed: updatedStories.hits });
  };

  hideStory = storyId => {
    const updatedStories = NewsService.hideStory(storyId);
    this.setState({ newsFeed: updatedStories.hits });
  };

  loadNews = (pageIndex, news_type) => {
    let req = null;
    if (news_type === "new") {
      req = NewsService.getNewsByDateQuery(`tags=story&page=${pageIndex}`);
    } else {
      req = NewsService.getNewsByQuery(`tags=front_page&page=${pageIndex}`);
    }

    req.then(response => {
      console.log(response);
      sessionStorage.setItem("news", JSON.stringify(response));
      this.setState({ newsFeed: response.hits });
    });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.news_type !== this.props.match.params.news_type
    ) {
      this.setState({ newsFeed: [], pageIndex: 0 });
      this.loadNews(0, nextProps.match.params.news_type);
    }
  }

  render() {
    let hiddenStories = [];
    if (sessionStorage.getItem("hiddenStories")) {
      hiddenStories = JSON.parse(sessionStorage.getItem("hiddenStories"))
        .stories;
    }
    return (
      <div>
        {this.state.pageIndex !== 0 && this.state.pageIndex > 0 && (
          <span className="paging-icons" onClick={() => this.fetchMore(false)}>
            Previous..
          </span>
        )}
        <table className="strips">
          <tbody>
            {hiddenStories.length > 0
              ? this.state.newsFeed
                  .filter(
                    x => hiddenStories.findIndex(y => y === x.objectID) === -1
                  )
                  .map((news, index) => {
                    return (
                      <NewsRow
                        key={index}
                        news={news}
                        index={index}
                        upvote={this.upVoteStory}
                        hide={this.hideStory}
                      />
                    );
                  })
              : this.state.newsFeed.map((news, index) => {
                  return (
                    <NewsRow
                      key={index}
                      news={news}
                      index={index}
                      upvote={this.upVoteStory}
                      hide={this.hideStory}
                    />
                  );
                })}
          </tbody>
        </table>
        {this.state.newsFeed.length === this.state.pageSize && (
          <span className="paging-icons" onClick={() => this.fetchMore(true)}>
            More..
          </span>
        )}
      </div>
    );
  }
}

export default TopNews;
