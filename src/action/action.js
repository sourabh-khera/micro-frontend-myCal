/**
 * Created by sourabh on 29/4/17.
 */
import {
    FETCH_EVENTS_STARTED,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_ERROR,
}from "../config/constants"

export const fetchEventsStarted=()=>{

    return({type:FETCH_EVENTS_STARTED})
}

export const fetchEventsSuccess=(events)=>{

    return({type:FETCH_EVENTS_SUCCESS,events})
}

export const fetchEventsError=(err)=>{

    return({type:FETCH_EVENTS_ERROR,err})
}