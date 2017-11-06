export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'

export function addPost (post){
  console.log('dispatching')
  debugger
  return {
    type: ADD_POST,
    post
  }
}

export function removePost ( { id }){
  return {
    type: DELETE_POST,
    id
  }
}

export function filterByCategory ( id ){
  return {
    type: FILTER_CATEGORY,
    id
  }
}
