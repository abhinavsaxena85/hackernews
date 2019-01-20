import React from "react";
import moment from "moment";
import grayArrow from "../../media/grayarrow.gif";
import { Link } from "react-router-dom";

export const NewsRow = props => {
  if (!props.news.url) {
    console.log("invalid url" + props.news.title);
  }
  return (
    <tr key={props.index}>
      <td className="comments-count">
        <span>
          <Link to={`/story/${props.news.objectID}/comments`}>
            {props.news.num_comments}
          </Link>
        </span>
      </td>
      {!sessionStorage.getItem("upVotedStories") ||
      JSON.parse(sessionStorage.getItem("upVotedStories")).stories.findIndex(
        x => x.toLowerCase() === props.news.objectID.toLowerCase()
      ) === -1 ? (
        <td className="upvotes-count">
          <span className="upvotes-count-large">{props.news.points}</span>
          <img
            src={grayArrow}
            alt="upvote"
            onClick={() => props.upvote(props.news.objectID)}
          />
        </td>
      ) : (
        <td className="upvotes-count-noarrow">
          <span className="upvotes-count-large">{props.news.points + 1}</span>
        </td>
      )}
      <td className="display-thing">
        <span className="title">
          {props.news.url ? (
            <a href={props.news.url}>{props.news.title}</a>
          ) : (
            props.news.title
          )}
        </span>
        {props.news.url ? (
          <span className="comhead">
            (
            <a href={props.news.url}>
              {new URL(props.news.url).hostname.replace("www.", "")})
            </a>
          </span>
        ) : (
          <span />
        )}
        <span className="subtext">
          {!sessionStorage.getItem("upVotedStories") ||
          JSON.parse(
            sessionStorage.getItem("upVotedStories")
          ).stories.findIndex(
            x => x.toLowerCase() === props.news.objectID.toLowerCase()
          ) === -1 ? (
            <span className="upvotes-count-small">
              {props.news.points} points |
            </span>
          ) : (
            <span className="upvotes-count-small">
              {props.news.points + 1} points |
            </span>
          )}
          by <span className="normal-text">{props.news.author}</span>
          {moment(props.news.created_at).fromNow()}
          {props.news.num_comments && (
            <span className="comment-count-inline">
              <Link to={`/story/${props.news.objectID}/comments`}>
                {`| ${props.news.num_comments} comments`}
              </Link>
            </span>
          )}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => props.hide(props.news.objectID)}
          >
            [ <span className="normal-text">hide</span> ]
          </span>
        </span>
      </td>
    </tr>
  );
};
