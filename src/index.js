import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";

// Function to route all movies
function* getItems(action) {
  try {
    let response = yield axios.get("/api/movies");
    yield put({
      type: "SET_MOVIES",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
  try {
    let response = yield axios.get("/api/genres");
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (err) {
    console.warn(err);
  }
}

// Put function to dispatch
function* updateMovie(action) {
  try {
    let response = yield axios.put(`/api/movies/+{action.payload.id}`);
    yield put({
      type: "GET_MOVIES",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error in updateMovie saga: ", error);
  }
}

// Get function to obtain details
function* movieDetails(action) {
  try {
    let response = yield axios.get(`/api/movies/${action.payload}`);
    yield put({
      type: "GET_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error in movieDetails saga: ", error);
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getItems);
  yield takeEvery("UPDATE_DETAILS", updateMovie);
  yield takeEvery("GET_DETAILS", movieDetails);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
