import React, {Component} from 'react';
import { inject, observer } from 'mobx-react'
@inject('store')
@observer
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {username: ''};
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.store.session.login({username: this.state.username});
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">用户名</label>
                            <input type="text" className="form-control" value={this.state.username}
                                   onChange={event => this.setState({username: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// Login = connect(
//     state => state.session,
//     actions
// )(Login);
export default Login;