/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  SMURFS_LOAD,
  SMURFS_SUCCESS,
  SMURFS_FAILURE,
  SMURFS_EDIT_LOAD,
  SMURFS_EDIT
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURFS_LOAD:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };

    case SMURFS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case SMURFS_EDIT_LOAD:
      return {
        ...state,
        updatingSmurf: true
      };

    case SMURFS_EDIT:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;
