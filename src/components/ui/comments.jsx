import React, { Component } from "react";
import moment from "moment";
import grayArrow from "../../media/grayarrow2x.gif";
import NewsService from "../service/api/newsService";
import Comment from "./comment";

class Comments extends Component {
  state = {
    selectedStory: {},
    pageIndex: 0,
    comments: []
  };

  componentDidMount() {
    var story = JSON.parse(sessionStorage.getItem("news")).hits.find(
      x =>
        x.objectID.toLowerCase() ===
        this.props.match.params.storyId.toLowerCase()
    );
    this.setState({ selectedStory: story });
    NewsService.getAllItemsById(this.props.match.params.storyId).then(
      response => {
        console.log(response);
        this.setState({ comments: response.children });
      }
    );
  }

  render() {
    return (
      <div className="comments-container">
        <table className="no-strips">
          <tbody>
            <tr>
              <td colSpan="5">
                <table>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <img
                          style={{ width: "10px" }}
                          src={grayArrow}
                          alt="uparrowå"
                        />
                      </td>
                      <td className="display-thing">
                        <span className="title">
                          {this.state.selectedStory.title}
                        </span>
                        {this.state.selectedStory.url ? (
                          <span className="comhead">
                            (
                            <a href={this.state.selectedStory.url}>
                              {new URL(
                                this.state.selectedStory.url
                              ).hostname.replace("www.", "")}
                              )
                            </a>
                          </span>
                        ) : (
                          <span />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" />
                      <td className="display-thing">
                        <span className="subtext">
                          {this.state.selectedStory.points} points by
                          <span className="orange-text">
                            {this.state.selectedStory.author}
                          </span>
                          {moment(
                            this.state.selectedStory.created_at
                          ).fromNow()}{" "}
                          |<span className=""> hide</span>
                          <span className=""> |</span>
                          <span className=""> web</span>
                          <span className=""> |</span>
                          <span className=""> favorite</span>
                          <span className=""> |</span>
                          <span className="">
                            {this.state.selectedStory.num_comments} comments
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" />
                      <td>
                        <textarea className="text-area-width" rows="5" />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" />
                      <td>
                        <button className="button-add-comment">
                          Add Comment
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {this.state.comments.map((comment, index) => {
              return <Comment key={index} commentData={comment} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Comments;
