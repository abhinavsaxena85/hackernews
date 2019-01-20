import React from "react";
import { shallow } from "enzyme";
import Comment from "../components/ui/comment";

describe("Comment test suite", () => {
  let wrapper;
  const props = {
    id: 18941838,
    created_at: "2019-01-18T18:58:34.000Z",
    created_at_i: 1547837914,
    type: "comment",
    author: "darkerside",
    title: null,
    url: null,
    text:
      "<p>Just a side note, but the auditorium they&#x27;re using to record is gorgeous. Its lines themselves remind me of a violin.</p>",
    points: null,
    parent_id: 18936490,
    story_id: 18936490,
    children: [
      {
        id: 18945652,
        created_at: "2019-01-19T06:30:08.000Z",
        created_at_i: 1547879408,
        type: "comment",
        author: "Godel_unicode",
        title: null,
        url: null,
        text:
          "<p>That&#x27;s exactly why they chose it. The mythos of the Stradivarius is 100% about look and feel as opposed to anything real about the sound. It&#x27;s the same reason expensive wines are tasted in fancy tasting rooms.</p>",
        points: null,
        parent_id: 18941838,
        story_id: 18936490,
        children: [
          {
            id: 18946058,
            created_at: "2019-01-19T08:52:42.000Z",
            created_at_i: 1547887962,
            type: "comment",
            author: "andrewbinstock",
            title: null,
            url: null,
            text:
              "<p>&gt;The mythos of the Stradivarius is 100% about look and feel as opposed to anything real about the sound.</p><p>Nope. The Strads do have a <i>great</i> sound. The fact that select modern instruments can make equally great sound does not in any way diminish that for most of the last two centuries, Strads were among the very best-sounding violins.</p>",
            points: null,
            parent_id: 18945652,
            story_id: 18936490,
            children: [],
            options: []
          },
          {
            id: 18946077,
            created_at: "2019-01-19T08:57:49.000Z",
            created_at_i: 1547888269,
            type: "comment",
            author: "Drdrdrq",
            title: null,
            url: null,
            text:
              "<p>Well, Stradivarius <i>was</i> exceptional at the time, and the fact that these violins still hold their own after more than 2 centuries means that it&#x27;s not just look and feel. But yes, there are (some) better instruments available nowadays and we are also able to simulate any instrument available with outstanding precision.</p>",
            points: null,
            parent_id: 18945652,
            story_id: 18936490,
            children: [],
            options: []
          },
          {
            id: 18945665,
            created_at: "2019-01-19T06:35:43.000Z",
            created_at_i: 1547879743,
            type: "comment",
            author: "dejv",
            title: null,
            url: null,
            text:
              "<p>True. It is called priming: your mind is preparing itself for something special and it makes you enjoying the thing more.</p>",
            points: null,
            parent_id: 18945652,
            story_id: 18936490,
            children: [],
            options: []
          }
        ],
        options: []
      }
    ],
    options: []
  };

  function renderShallow() {
    wrapper = shallow(<Comment commentData={props} />);
  }

  it("<Comment/> should render with props(snapshot)", () => {
    renderShallow();
    expect(wrapper).toMatchSnapshot();
  });

  it("<Comment/> should call toggleChildren ", () => {
    renderShallow();
    let instance = wrapper.instance();
    wrapper
      .find(".subtext")
      .first()
      .simulate("click");
    expect(instance.state.toggleChildren).toBe(true);
  });
});
