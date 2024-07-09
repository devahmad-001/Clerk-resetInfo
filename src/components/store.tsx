// 'use client'

// import { createStore, combineReducers} from '@reduxjs/toolkit';

// import { thunk } from 'redux-thunk';

// import axios from 'axios'

// let arrayofnames: any = {

//     Newusers: []
// }

// function Addata(oldata = arrayofnames, newdata: any) {

//     oldata = { ...oldata }

//     if (newdata.type == "User_Data") {

//         oldata.Newusers.push(newdata.comp)

//     }

//     return oldata;

// };

// let Rootreducer = combineReducers({ Addata })

// let store = createStore(Rootreducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./singUpSlice";
import loginUser from "./loginSlice";

export const MainStore = configureStore({
  reducer: {
    signup: userSlice,
    login: loginUser,
  },
});
