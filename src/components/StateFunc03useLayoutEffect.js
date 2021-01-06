import { render } from '@testing-library/react'
import React,{ useEffect, useState, useLayoutEffect } from 'react'


//  相似的用法
//  1.接收一个函数作为参数
//  2.接收第二个参数  依赖列表  只有依赖更新时，才会执行函数
//  3.返回一个函数，①先执行返回函数，②再执行参数函数
function StateFunction () {

    const [num, setNum] = useState(0)

    //不同点
    //useEffect 执行时机在 render 之后
    //useLayoutEffect dom更新之后
    //在类组件中用componentWillMount生命周期来实现
    useLayoutEffect( () => {
        console.log('useLayoutEfffect')

        return () => {
            console.log(1)
        }
    },[num])
    //  也存在依赖

    useEffect( () => {
        console.log('useEffect')
    },[num])
    
    return (
        <div onClick={ () => setNum( num => num+1 ) }>
            这是一个函数式组件————{num}
        </div>
    )
}

export default StateFunction