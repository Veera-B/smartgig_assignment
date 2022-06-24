import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import usersReducer from '../containers/userSlicer';
import userSaga from '../containers/usersSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{users: usersReducer},
    middleware: [sagaMiddleware]
  });
  sagaMiddleware.run(userSaga);
export default store;