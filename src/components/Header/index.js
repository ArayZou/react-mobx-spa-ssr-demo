import React, {Component, Fragment} from 'react';
import { inject, observer } from 'mobx-react'
import styles from './index.css';
import history from '../../client/history'
import withStyles from '../../withStyles';

@inject('store')
@observer
class Header extends Component {
    constructor(props) {
        super(props)
    }
    linkClick = (href) => {
        history.push(href)
    }
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">{typeof window !== 'undefined' ? 'React-JS' : 'SSR'}</a>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li><a onClick={() => {this.linkClick('/')}}>首页</a></li>
                            {this.props.store.session.user && <Fragment>
                                <li><a onClick={() => {this.linkClick('/logout')}}>退出</a></li>
                                <li><a onClick={() => {this.linkClick('/profile')}}>个人中心</a></li>
                                <li><a onClick={() => {this.linkClick('/counter')}}>counter</a></li>
                            </Fragment>}
                            {!this.props.store.session.user && <li><a  onClick={() => {this.linkClick('/login')}}>登录</a></li>}
                        </ul>
                        {
                            this.props.store.session.user && (
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a className={styles.user}>{this.props.store.session.user.username}</a></li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </nav>
        )
    }
}
export default withStyles(Header, styles);