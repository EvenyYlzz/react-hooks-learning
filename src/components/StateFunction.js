import React,{ useEffect, useState } from 'react'

//  使用useState来创建状态
//  1.引入
//  2.接收一个参数作为初始值
//  3.返回一个数组，第一个值为状态，第二个值为改变状态的函数
function StateFunction () {

    const [num, setNum] = useState(0)
    //     类名，修改函数名            初始值

    //  useEffect
    //  1.接收一个函数作为参数
    //  2.接收第二个参数  依赖列表  只有依赖更新时，才会执行函数
    //  3.返回一个函数，限制性返回函数，再执行参数函数
    useEffect( () => {
        console.log('2222函数式组件结束渲染')
        //  添加绑定方法事件(要修改依赖，绑定到依赖上)

        return () => {
            //  在每次执行useEffect之前都会执行一次return中内容

            //  移除绑定方法事件(要修改依赖，绑定到依赖上)
            console.log('1111销毁')
        }
    },[])
    //  第二个参数接受一个数组，表示依赖的列表
    //  设置[num],[]观察console.log区别
    //  [num]，依赖于num的更新
    //  []不依赖于任何状态的更新
    
    //  如果我现在这个改变的东西很多，计算量很大，每次都会重新渲染则会引起很多问题
    return (
        <div onClick={ () => setNum( num => num+1 ) }>
            这是一个函数式组件————{num}
        </div>
    )
}

export default StateFunction