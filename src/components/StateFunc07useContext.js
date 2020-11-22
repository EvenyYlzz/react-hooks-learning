import { render } from '@testing-library/react'
import React,{ useState,useContext,createContext } from 'react'

const Context = createContext(null)

//  1.需要引入useContetx  createContext  两个内容
//  2.通过createContext创建一个context句柄
//  3.Context.Provider来确定数据共享范围
//  4.通过value来分发内容
//  5.在子组件中，通过useContext(Context句柄)来获取数据

function StateFunction () {

    const [num, setNum] = useState(1)

    return (
        <div>
            <button onClick={ ()=> setNum(num => num+1) }>增加num的值+1</button>
            <br></br>
            这是一个函数式组件——num:{  num }
            <Item1 num={num}></Item1>
            <Item2 num={num}></Item2>
            <Context.Provider value={num}>
                <Item3></Item3>
                <Item4></Item4>
            </Context.Provider>
        </div>
    )
}

function Item3 () {
    const num = useContext(Context)

    return (
        <div>
            子组件3: { num }
        </div>
    )
}

function Item4 () {
    const num = useContext(Context)

    return (
        <div>
            子组件4: { num+2 }
        </div>
    )
}

function Item1 (props) {
    return (
        <div>
            子组件1 num：{ props.num }
        </div>
    )
}

function Item2 (props) {
    return (
        <div>
            子组件2 num：{ props.num }
        </div>
    )
}

export default StateFunction