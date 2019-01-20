import request from '../request'

function getNewsByQuery(query) {
  return request({
    url: `/api/v1/search?${query}`,
    method: 'GET'
  });
}

function getNewsByDateQuery(query) {
  return request({
    url: `/api/v1/search_by_date?${query}`,
    method: 'GET'
  });
}

function getAllItemsById(id) {
  return request({
    url: `/api/v1/items/${id}`,
    method: 'GET'
  });
}

function upVoteStory(storyId) {
  // return request({
  //   url:    `/api/v1/search_by_date?${query}`,
  //   method: 'PUT'
  // });
  let upVoteStory = {};
  if (sessionStorage.getItem("upVotedStories")) {
    upVoteStory = JSON.parse(sessionStorage.getItem("upVotedStories"))
    upVoteStory.stories.push(storyId);
    sessionStorage.setItem("upVotedStories", JSON.stringify(upVoteStory))
  } else {
    const storiesId = [];
    storiesId.push(storyId);
    upVoteStory = {
      stories: storiesId
    }
    sessionStorage.setItem("upVotedStories", JSON.stringify(upVoteStory))
  }
  return JSON.parse(sessionStorage.getItem('news'));

}

function hideStory(storyId) {
  let hiddenStory = {};
  if (sessionStorage.getItem("hiddenStories")) {
    hiddenStory = JSON.parse(sessionStorage.getItem("hiddenStories"))
    hiddenStory.stories.push(storyId);
    sessionStorage.setItem("hiddenStories", JSON.stringify(hiddenStory))
  } else {
    const storiesId = [];
    storiesId.push(storyId);
    hiddenStory = {
      stories: storiesId
    }
    sessionStorage.setItem("hiddenStories", JSON.stringify(hiddenStory))
  }
  return JSON.parse(sessionStorage.getItem('news'));

}


const NewsSearchService = {
  getNewsByQuery,
  getNewsByDateQuery,
  upVoteStory,
  getAllItemsById,
  hideStory
}

export default NewsSearchService;