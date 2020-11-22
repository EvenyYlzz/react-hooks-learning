import { render } from '@testing-library/react'
import React,{ useEffect, useState, useLayoutEffect, useMemo, useCallback } from 'react'

const set = new Set()

function StateFunction () {

    const [num, setNum] = useState(0)
    const [age, setAge] = useState(18)

    //  在使用方法上，useCallback 与 useMemo 相同
    //  useMemo返回的是一个值
    //  useCallback返回的是一个函数
    //  不同点
    //  1.useMemo返回的是一个值，useCallback返回的是一个函数
    //  2.useMemo缓存的是一个值，useCallback缓存的是一个函数
    const getDoubleNum = useCallback( () => {
        console.log('useCallback')
        return 2 * num
    },[num] )

    //  设置依赖为[]，[num]进行一个对比，会发现set的长度的两种变化
    set.add(getDoubleNum)
    console.log('set.size：',set.size)
    
    // function getDoubleNum () {
    //     console.log(`获取双倍Num${num}`)

    //     return 2 * num
    // }

    return (
        <div onClick={ () => setNum( num => num+1 ) }>
            这是一个函数式组件————num:{  getDoubleNum() }
            <br></br>
            age的值为————age:{ age }
            <Child callback={ getDoubleNum }></Child>
        </div>
    )
}


//  使用场景，父组件的传入函数不更新，就不会触发子组件的函数
function Child(props) {
    console.log(props.callback)

    useEffect( () => {
        console.log('callback更新了')
    },[props.callback])

    return (
        <div>
            child
        </div>
    )
}

export default StateFunction