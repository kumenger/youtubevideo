import {combineReducers} from 'redux'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const fetcheVideosReducers=(state=[],action)=>{
    switch(action.type){
        case "FETCH_VIDEOS":
            return action.payload
            default:
                return state
    }
}
const getVideoIdReducer=(state="",action)=>{
    switch(action.type){
        case "GET_VIDEOID":
            return action.payload
            default:
                return state
    } 
}
const getNewsReducer=(state="",action)=>{
    switch(action.type){
        case "FETCH_NEWS":
            return action.payload
            default:
                return state
    } 
}
const gettitlereducer=(state={title:null},action)=>{
    if(action.type==="GET_TITLE"){
        return {...state,title:action.payload}
    }
    return state
}
const rootPersistConfig = {
    key: "root",
    storage,
    blacklist: [
      
  
    ],
  }

export default persistReducer(rootPersistConfig,(combineReducers({getVideoIdReducer:getVideoIdReducer,fetcheVideosReducers:fetcheVideosReducers,getNewsReducer:getNewsReducer,gettitlereducer:gettitlereducer})))   