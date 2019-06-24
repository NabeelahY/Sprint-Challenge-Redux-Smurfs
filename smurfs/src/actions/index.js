/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const SMURFS_LOAD = "SMURFS_LOAD";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILURE = "SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_LOAD });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
        type: SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SMURFS_FAILURE,
        payload: err.message
      });
    });
};

export const addSmurf = smurf => dispatch => {
  const { name, age, height } = smurf;
  axios
    .post("http://localhost:3333/smurfs", { name, age, height })
    .then(res => dispatch(getSmurfs()))
    .catch(err => console.log(err));
};

export const SMURFS_EDIT_LOAD = "SMURFS_EDIT_LOAD";
export const SMURFS_EDIT = "SMURFS_EDIT";

export const editSmurf = (id, smurf) => dispatch => {
  const { name, age, height } = smurf;
  dispatch({ type: SMURFS_EDIT_LOAD })
  axios
    .put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SMURFS_EDIT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteSmurfs = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch(getSmurfs()))
    .catch(err => console.log(err));
};
