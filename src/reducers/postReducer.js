import { CREATE_POST } from "../redux/types"

const initialState = {
    posts: [],
    fetchedPosts: [],
}


export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
            // return {...state, posts: [...state.posts, action.payload]}
        default: return state
    }

     
}