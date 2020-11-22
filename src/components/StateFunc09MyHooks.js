import { render } from '@testing-library/react'
import React,{ useState,useReducer } from 'react'
import useLoadData from '../utils/useLoadData'
import useLocalReducer from '../utils/useLocalReducer'

function StateFunction () {

    const [state,dispacth] = useLocalReducer()

    const [num,setNum] = useLoadData()

    return (
        <div>
            <button onClick={ () => {
                dispacth({
                    type: 'addage',
                    age: state.age+1
                })
            } }>
                增加age的值+1
            </button>
            <br></br>
            age的值————age: { state.age }
            <br></br>
            这是一个函数式组件——num:{  num }
        </div>
    )
}


export default StateFunction