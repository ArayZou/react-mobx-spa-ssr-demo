import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Login extends Component {
    render() {
        return (
            this.props.store.session.user ? <div className="row">
                <div className="col-md-6 col-md-offset-6">
                    个人中心
                </div>
            </div> : <Redirect to="/login"/>
        )
    }
}

// Login = connect(
//     state => state.session
// )(Login);
export default Login;