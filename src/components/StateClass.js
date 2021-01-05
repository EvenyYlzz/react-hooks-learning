import React from 'react'

class StateClass extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '类',
            num:0
        }
    }

    // componentDidMount(){
    //     console.log('类组件结束渲染')
    //     setTimeout(() => {
    //         console.log(this.state.num)
    //     },3000)
    // }

    // componentDidUpdate(){
    //     setTimeout(() => {
    //         console.log(this.state.num)
    //     },3000)
    // }

    render() {
        return (
            <div>
                <div onClick={ this.setName }>
                    这是一个类组件————{ this.state.name }
                </div>
                <div onClick={ this.setNum }>
                    这是一个类组件————{ this.state.num }
                </div>
            </div>
        )
    }

    setName = () => {
        this.setState({
            name: '我通过类组件方法变成这样了'
        })
    }

    setNum = () => {
        this.setState({
            num: this.state.num+1
        })
    }
}

export default StateClass