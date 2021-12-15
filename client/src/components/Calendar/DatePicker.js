import React, {useReducer, useState} from 'react'
import {DateRangeInput} from '@datepicker-react/styled'




const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
    }
    
    function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return {...state, focusedInput: action.payload}
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}
    
    const DatePicker = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [dates, setDates] = useState([]);

    let { startDate, endDate } = state;



    return (
        <DateRangeInput
            onDatesChange={data => dispatch({type: 'dateChange', payload: data, 
            localStorage: localStorage.setItem("startDate", startDate),
            localStorage: localStorage.setItem("endDate", endDate )
        })}
            onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
            startDate={state.startDate} 
            endDate={state.endDate} 
            focusedInput={state.focusedInput}
        />
    )
}

    export default DatePicker;

    // TRY make the calendar responsive 

    // .responsive-calendar {
    //     /* by setting font-size, all the elements will correspond */
    //     font-size: 9px !important; /* default to 10px */
    //   }
    
    //   @media (max-width: 1500px) {
    //     .responsive-calendar {
    //       font-size: 8px !important;
    //     }
    //   }
    
    //   @media (max-width: 1200px) {
    //     .responsive-calendar {
    //       font-size: 7px !important;
    //     }
    //   }
    
    //   @media (max-width: 768px) {
    //     .responsive-calendar {
    //       font-size: 6px !important;
    //     }
    //   }
    
    //   /* Large screens */
    //   @media (min-width: 2500px) {
    //     .responsive-calendar {
    //       font-size: 12px !important;
    //     }
    //   }

