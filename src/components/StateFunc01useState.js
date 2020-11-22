import React,{ useState } from 'react'

//  使用useState来创建状态
//  1.引入
//  2.接收一个参数作为初始值
//  3.返回一个数组，第一个值为状态，第二个值为改变状态的函数
function StateFunction () {

    const [name, setName] = useState('函数')
    //     类名，修改函数名            初始值

    return (
        <div onClick={ () => setName('我使用hooks变成这样了') }>
            这是一个函数式组件————{name}
        </div>
    )
}

export default StateFunction