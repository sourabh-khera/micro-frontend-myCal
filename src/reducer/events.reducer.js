/**
 * Created by sourabh on 29/4/17.
 */

import {
    FETCH_EVENTS_STARTED,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_ERROR
 } from "../config/constants"
const initialState = {
    events: [],
    loading: false,
    error: null,

}

export const eventsReducer=(state=initialState,action)=>{

      switch(action.type){
          case FETCH_EVENTS_STARTED:{
               return{
                   ...state,loading:true
               }
          }

          case FETCH_EVENTS_SUCCESS:{
              const events=state.events.concat(action.events)
              return{
                  ...state,loading:false,events
              }
          }

          case FETCH_EVENTS_ERROR:{
              return{
                  ...state,error:action.err
              }
          }
           default:{
               return state
           }
      }
}