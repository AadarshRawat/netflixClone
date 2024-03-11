import {configureStore,combineReducers} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import configreducer from './configSlice'


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
  };



const rootReducer = combineReducers({
user: userReducer,
movies: moviesReducer,
gpt:gptReducer,
config:configreducer

});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
  );


export const appStore = configureStore({
reducer: persistedReducer
});

export const persistor = persistStore(appStore);


// const appStore = configureStore({
//     reducer:{
//         user:userReducer,
//         movies: moviesReducer,
//     },

// });

export default appStore