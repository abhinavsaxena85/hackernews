import React from "react";
import { shallow } from "enzyme";
import {NewsRow} from "../components/ui/newsrow.jsx";

describe("NewsRoo test suite", () => {
  let wrapper;
  const props = {
    news: {
      created_at: "2016-02-24T17:50:47.000Z",
      title: "London Stock Exchange in Merger Talks with Deutsche Börse",
      url:
        "http://www.nytimes.com/2016/02/24/business/dealbook/london-stock-exchange-in-merger-talks-with-deutsche-borse.html",
      author: "PaulHoule",
      points: 2,
      story_text: null,
      comment_text: null,
      num_comments: 0,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1456336247,
      _tags: ["story", "author_PaulHoule", "story_11168638", "front_page"],
      objectID: "11168638",
      _highlightResult: {
        title: {
          value: "London Stock Exchange in Merger Talks with Deutsche Börse",
          matchLevel: "none",
          matchedWords: []
        },
        url: {
          value:
            "http://www.nytimes.com/2016/02/24/business/dealbook/london-stock-exchange-in-merger-talks-with-deutsche-borse.html",
          matchLevel: "none",
          matchedWords: []
        },
        author: { value: "PaulHoule", matchLevel: "none", matchedWords: [] }
      }
    },
    index: 19
  };
  function renderShallow() {
    wrapper = shallow(<NewsRow {...props} />);
  }

  it("<NewsRow/> should render with props(snapshot)", () => {
    renderShallow();
    expect(wrapper).toMatchSnapshot();
  });
});
