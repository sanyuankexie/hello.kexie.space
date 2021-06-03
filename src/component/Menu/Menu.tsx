import React, { Component } from 'react';
import { withRouter } from 'react-router'
import css from './Menu.module.css'
import logo from '../../assets/images/logo.png'
import Float from '../Float/Float';

class Menu extends Component<any> {


    render() {
        return (
            <div>
                <Float speed={256}>
                    <img className={css.logo} src={logo} alt="" />
                </Float>
            </div>
        );
    }
}

export default withRouter(Menu);