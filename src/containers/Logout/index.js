import React, {Component} from 'react';
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Logout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-6">
                    <button
                        onClick={() => this.props.store.session.logout()}
                        type="submit" className="btn btn-primary">退出
                    </button>
                </div>
            </div>
        )
    }
}

export default Logout;