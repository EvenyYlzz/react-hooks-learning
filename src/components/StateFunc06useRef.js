import { render } from '@testing-library/react'
import React,{ useEffect, useState, useLayoutEffect, useMemo, useCallback,useRef } from 'react'


function StateFunction () {

    const [num, setNum] = useState(0)
    const [age, setAge] = useState(18)

    //  1.保存一个值，在整个生命周期中维持不变
    //  2.重新赋值ref.current 不会触发重新渲染

    const ref = useRef()
    useEffect( () => {
        ref.current = setInterval( () => {
            setNum( num => num+1 )
        },400 )

        // ref.current = '111'
    },[] )

    useEffect( () => {
        if(num > 10){
            console.log('大于10了，清除定时器')
            console.log('ref.current',ref.current)
            clearTimeout(ref.current)
        }
    },[num] )



    // let timer
    // useEffect( () => {
    //     timer = setInterval( () => {
    //         setNum( num => num+1 )
    //     },400 )
    // },[] )

    // //  因为每一个timer都是独立render的，所以获取不到
    // useEffect( () => {
    //     if(num > 10){
    //         console.log('大于10了，清除定时器')
    //         console.log('timer：',timer)
    //         clearTimeout(timer)
    //     }
    // },[num] )

    return (
        <div>
            这是ref.current的值——ref.current:{ ref.current }
            <br></br>
            这是一个函数式组件————num:{  num }
            <br></br>
            age的值为————age:{ age }
        </div>
    )
}

export default StateFunction