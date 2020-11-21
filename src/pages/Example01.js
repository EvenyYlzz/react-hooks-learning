import React, { useState } from 'react';

//  自定义钩子函数必须以大写字母开头
function Example01() {
    const [ count,setCount ] = useState(0)

    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={() => {setCount(count+1)}}>
                Click Me!
            </button>
        </div>
    )
    
}

// class example01 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count:0
//         }
//     }

//     render(){
//         return (
//             <div>
//                 <p>你点击了{this.state.count}次</p>
//                 <button onClick={this.clickEvent}>
//                     Click Me!
//                 </button>
//             </div>
//         )
//     }

//     clickEvent=()=>{
//         this.setState({
//             count: this.state.count+1
//         })
//     }
// }

export default Example01