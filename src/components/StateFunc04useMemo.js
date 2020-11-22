import { render } from '@testing-library/react'
import React,{ useEffect, useState, useLayoutEffect, useMemo } from 'react'


function StateFunction () {

    const [num, setNum] = useState(0)
    const [age, setAge] = useState(18)

    
    //  div触发的方法与该方法不相关，不影响，但是依旧会触发该方法，如果计算量很大，那么会耗费不必要的性能
    // function getDoubleNum () {
    //     console.log(`获取双倍Num${num}`)

    //     return 2 * num
    // }


    //  useMemo使用方法
    //  1.接收一个函数作为参数
    //  2.第二个参数为依赖列表，useEffect，useLayoutEffect进行对比
    //  3.返回的是一个值
    const getDoubleNum = useMemo( () => {
        console.log(`获取双倍Num${num}`)
        return 2 * num
    },[num] )
    //  设定第二个参数只跟随num去更新

    return (
        <div onClick={ () => setAge( age => age+1 ) }>
            这是一个函数式组件————{  getDoubleNum }
            <br></br>
            age的值为————{ age }
        </div>
    )
}

export default StateFunction