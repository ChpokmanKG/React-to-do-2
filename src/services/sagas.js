import {takeEvery,put,call} from 'redux-saga/effects';
import {REQUEST_POSTS_START} from "../actions/taskAction";
import allActions from "../actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS_START,sagaWorker)
}

function* sagaWorker() {
  try{
    const json = yield call(fetchPosts);
    yield put(allActions.Task.requestPostsSuccess(json))
  }catch (e) {
    yield put(allActions.Task.requestPostsFailed())
  }
}

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
  return await res.json();
}
