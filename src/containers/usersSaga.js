import axios from 'axios';
import {call, put, takeEvery } from 'redux-saga/effects';
import { getUsersSuccess,getUsersFailed } from './userSlicer';

function* getAllUsers() {
    // debugger;
    try {  
       const apiResp =  yield call (() =>axios.get('https://api.thecatapi.com/v1/breeds'));
        // console.log("formatedData",apiResp.data);
        yield put(getUsersSuccess(apiResp.data))
    } catch(error){
        yield put(getUsersFailed(error));
       // console.log("error",error);
    }
}

function* userSaga(){
    yield takeEvery('users/getUsers', getAllUsers)
}

export default userSaga;