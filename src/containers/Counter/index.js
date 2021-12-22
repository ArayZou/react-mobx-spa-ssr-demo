import React, {Component} from 'react';
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Home extends Component {
    constructor(props) {
        super(props)
        console.log('Home 组件即将挂载');
    }
    render() {
        return (
            <div>
                <p>{this.props.store.counter.number}</p>
                <button onClick={() => this.props.store.counter.increment(1)}>+</button>
            </div>
        )
    }
}

// Home = connect(
//     state => state.counter,
//     actions
// )(Home);
export default Home;