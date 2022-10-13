import profileReducer, {addPostActionCreator, deletePost, postId1, postId2, postId3, postId4} from "./profile-reducer";

let state = {
    posts: [
        {id: postId1, message: 'Hi', likesCount: 0},
        {id: postId2, message: 'How are you?', likesCount: 23},
        {id: postId3, message: 'Ya?', likesCount: 120201001},
        {id: postId4, message: 'What?!', likesCount: -1}
    ],
    profile: null,
    status: ''
}

test('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.posts.length).toBe(5)
})

test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

test('after deleting length of posts should be decrement', () => {
    //1. test data
    let action = deletePost(postId1)
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.posts.length).toBe(3)
})

test('after deleting that we don\'t have length of posts should not be change ', () => {
    //1. test data
    let action = deletePost('123132')
    //2.action
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.posts.length).toBe(4)
})