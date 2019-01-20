import React, { Component } from "react";
import moment from "moment";
import grayArrow from "../../media/grayarrow.gif";
import { Markup } from "interweave";

export default class Comment extends Component {
  state = {
    toggleChildren: false
  };

  toggleChildren() {
    this.setState({ toggleChildren: !this.state.toggleChildren });
  }

  render() {
    const {props} = this;
    console.log(JSON.stringify(props));
    return (
      <tr>
        <td colSpan="5">
          <table
            style={{ paddingLeft: "20px", display: "inline-block" }}
            className="strips white-bg"
          >
            <tbody>
              <tr className="bckg-inherit">
                <td colSpan="2" />
                <td>
                  <img src={grayArrow} alt="upvote"/>
                </td>
                <td style={{ cursor: "pointer" }}>
                  <span
                    className="subtext"
                    onClick={() => this.toggleChildren()}
                  >
                    {props.commentData.children.length > 0
                      ? !this.state.toggleChildren
                        ? "[+]"
                        : "[-]"
                      : ""}
                  </span>
                </td>
                <td className="display-thing">
                  <span className="subtext normal-text">
                    {props.commentData.author}
                  </span>
                  <span className="subtext">
                    {moment(props.commentData.created_at).fromNow()}
                  </span>
                </td>
              </tr>
              <tr className="bckg-inherit">
                <td colSpan="4" />
                <td className="display-thing">
                  <div className="subtext normal-text">
                    <Markup content={props.commentData.text} />
                  </div>
                </td>
              </tr>
              <tr className="bckg-inherit">
                <td colSpan="4" />
                <td className="display-thing">
                  <span className="subtext normat-text">
                    <a href={"/"}>reply</a>
                  </span>
                </td>
              </tr>

              {this.state.toggleChildren ? (
                props.commentData.children.map((comment, index) => {
                  return <Comment key={index} commentData={comment} />;
                })
              ) : (
                <tr />
              )}
            </tbody>
          </table>
        </td>
      </tr>
    );
  }
}
