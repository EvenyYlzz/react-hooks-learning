import React, { useState,useEffect } from 'react'

//  模拟实现数据接口请求功能
function useLoadData() {
    const [num, setNum] = useState(1)

    useEffect( () => {
        setTimeout( ()=> {
            setNum( num => num+1 )
        },1000)
    },[] )

    return [
        num,
        setNum
    ]
}

export default useLoadData

//  1.引入react和自己需要的hook
//  2.创建自己的hook函数
//  3.返回一个数组，数组中第一个内容是数据，第二个是修改数据的函数
//  4.将自己定义的hook函数导出
//  5.在自己的业务组件中，引入并使用