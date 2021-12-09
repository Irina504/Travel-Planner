// import React, { useState } from 'react'
// import DatePicker from "react-datepicker"

import React, {useReducer} from 'react'
import {DateRangeInput} from '@datepicker-react/styled'

// const CustomPicker = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(null);


//     const onChange = (dates) => {
//         const [start, end] = dates;
//         setStartDate(start);
//         setEndDate(end);
//     };


//     return (
//         <DatePicker
//         selected={startDate}
//         onChange={onChange}
//         startDate={startDate}
//         endDate={endDate}
//         selectsRange
//         inline
//     />
//     );
// };


// export default CustomPicker;


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
    
    const CustomPicker = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DateRangeInput
            onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
            onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
            startDate={state.startDate} 
            endDate={state.endDate} 
            focusedInput={state.focusedInput}
        />
    )
}

    export default CustomPicker;

