const initialState = {
  posts: [
      { id: 3,
        title: "My third post",
        content: "This is already my third post on the blog... Okay. This is already my third post on the blog... Okay." + 
                " This is already my third post on the blog... Okay. This is already my third post on the blog... Okay."},
      { id: 1,
        title: "My first post",
        content: "This is my very first post on the blog! This is my very first post on the blog!" +
                " This is my very first post on the blog! This is my very first post on the blog! "},
      { id: 4,
        title: "My fourth post",
        content: "This is my fourth post on the blog. It's getting boring. This is my fourth post on the blog. It's getting boring." +
                " This is my fourth post on the blog. It's getting boring. This is my fourth post on the blog. It's getting boring."},
      { id: 2,
        title: "My second post",
        content: "And this is my second post on the blog! And this is my second post on the blog!" +
                " And this is my second post on the blog! And this is my second post on the blog!"}
    ]
}

function mainReducer(state = initialState, action) {
    return state
  }

export default mainReducer;