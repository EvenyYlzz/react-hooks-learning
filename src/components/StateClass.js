import React from 'react'

class StateClass extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '类'
        }
    }

    componentDidMount(){
        console.log('类组件结束渲染')
    }

    render() {
        return (
            <div onClick={ this.setName }>
                这是一个类组件————{ this.state.name }
            </div>
        )
    }

    setName = () => {
        this.setState({
            name: '我通过类组件方法变成这样了'
        })
    }
}

export default StateClass