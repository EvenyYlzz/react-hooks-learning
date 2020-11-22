import React,{ useReducer } from 'react'


//  数据仓库
const store = {
    age: 1
}

//  管理者
const reducer = (state, action) => {
    switch(action.type){
        case 'addage':
            return {
                ...state,
                age: action.age
            }
        
        default:
            return {
                ...state
            }
    }
}

function useLocalReducer() {
    const [state, dispatch] = useReducer(reducer,store)
    return [
        state,
        dispatch
    ]
}

export default useLocalReducer