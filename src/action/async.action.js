/**
 * Created by sourabh on 29/4/17.
 */
import{
    fetchEventsStarted,
    fetchEventsSuccess,
    fetchEventsError
} from "./action"

import fetch from "isomorphic-fetch";


export const fetchEvents=()=>{

    return(dispatch)=>{

        dispatch(fetchEventsStarted())
        fetch("http://rest.learncode.academy/api/manoj/users")
            .then(response=>response.json())
            .then(events=>{

                dispatch(fetchEventsSuccess(events))
            })
            .catch((err)=>{
             dispatch(fetchEventsError(err))
            })

    }

}
