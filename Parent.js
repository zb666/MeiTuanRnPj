import React, {Component, PureComponent} from 'react'
import {Text, TouchableOpacity} from 'react-native'

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // 自定义方法 为的是让子组件能够向父组件进行传值
    onClickSon = (msgFromSon) => {
        console.log(msgFromSon)
    }

    //子组件向父组件传递的是方法
    render() {
        return (
            <Son onClickSon={this.onClickSon}/>
        )
    }
}

//PureComponent Component
class Son extends PureComponent {
    render() {
        return (<TouchableOpacity onPress={() =>
                this.props.onClickSon('为了让子组件向父组件传值')}>
                <Text style={{alignItems: 'center'}}>父组件向子组件进行传值</Text>
            </TouchableOpacity>
        )
    }
}