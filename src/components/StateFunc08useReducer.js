import { render } from '@testing-library/react'
import React,{ useState,useReducer } from 'react'

//  redux必须的内容
//  store reducer


//  useReducer使用方法
//  1.需要创建 数据仓库 store和 管理者 reducer
//  2.通过useReducer(reducer, store)来获取state和dispatch

const store = {
    num:1
}

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return {
                ...state,
                num: action.num+1
            }
        
        default:
            return {
                ...state
            }
    }
}


function StateFunction () {

    const [state,dispacth] = useReducer(reducer,store)


    return (
        <div>
            <button onClick={ () => {
                dispacth({
                    type: 'add',
                    num: state.num
                })
            } }>
                增加num的值+1
            </button>
            <br></br>
            这是一个函数式组件——num:{  state.num }
        </div>
    )
}


export default StateFunction