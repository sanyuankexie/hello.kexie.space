import React from "react";
import { Logo } from './../../static/cos';

import style from './css/department.module.scss';


import { Typography } from 'antd';
const { Title } = Typography


function Departments() {
    return (
        <section className={`projects-horizontal ${style.section}`}>
            <div >
                <div className="row projects">
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <img className="img-fluid" src={Logo.Multimedia} width={250} />
                            </div>
                            <div className="col">
                                <Title level={3}>多媒体部</Title>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <img className="img-fluid" src={Logo.Software} width={250} />
                            </div>
                            <div className="col">
                                <Title level={3}>软件部</Title>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <img className="img-fluid" src={Logo.Hardware} width={250} />
                            </div>
                            <div className="col">
                                <Title level={3}>硬件部</Title>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <img className="img-fluid" src={Logo.Organization} width={250} />
                            </div>
                            <div className="col">
                                <Title level={3}>组织部</Title>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Departments;