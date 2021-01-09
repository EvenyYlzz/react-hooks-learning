import { render } from '@testing-library/react'
import React,{ useEffect, useState, useLayoutEffect, useMemo,memo } from 'react'


// function StateFunction () {

//     const [num, setNum] = useState(1)
//     const [age, setAge] = useState(18)

    
//     //  div触发的方法与该方法不相关，不影响，但是依旧会触发该方法，如果计算量很大，那么会耗费不必要的性能
//     // function getDoubleNum () {
//     //     console.log(`获取双倍Num${num}`)

//     //     return 2 * num
//     // }

//     //  useMemo使用方法
//     //  1.接收一个函数作为参数
//     //  2.第二个参数为依赖列表，useEffect，useLayoutEffect进行对比
//     //  3.返回的是一个值
//     const getDoubleNum = useMemo( () => {
//         console.log(`获取双倍Num${num}`)
//         return 2 * num
//     },[num] )
//     //  设定第二个参数只跟随num去更新

//     return (
//         <div onClick={ () => {
//             setAge( age => age+1 )
//             // setNum( num => num+1 )
//         }}>
//             【--------------------------------------------
//             <br></br>
//             这是一个函数式组件————num：{  getDoubleNum }
//             {/* 注意这里getDoubleNum有无括号区别 */}
//             <br></br>
//             age的值为————{ age }
//             <br></br>
//             ----------------------------------------------】
//         </div>
//     )
// }

// function Child(){
//     console.log('子组件')
//     return (
//         <p>我是子组件</p>
//     )
// }

const Child = memo( () => {
    console.log('我是子组件')
    return <p>我是子组件</p>
})

function StateFunction() {

    const [show,setShow] = useState(true)

    // const info = {
    //     name: 'Even',
    //     age: 22
    // }

    const info = useMemo( () => {
        return {
                name: 'Even',
                age: 22
            }
    },[] )

    return(
        <div>
            <Child info={ info } />
            <button onClick={ () => setShow(!show) }>点击更新状态</button>
        </div>
    )
}

export default StateFunction