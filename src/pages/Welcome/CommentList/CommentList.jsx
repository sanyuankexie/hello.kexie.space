import React, {Component} from 'react';
import {Comment, Tooltip, List, Typography} from 'antd';
import moment from 'moment';
import './Comment.css'

const {Title} = Typography

class CommentList extends Component {
    render() {
        return (
            <div>
                <List
                    className="comment-list"
                    header={<Title level={3}>畅心所言</Title>}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
            </div>
        );
    }
}

export default CommentList;

const data = [
    {
        author: 'Therainisme',
        avatar: 'http://therainisme.com:1225/Therainisme/img/avatar.jpg',
        content: (
            <p>
                我们会一起遇见鲸鱼吗？
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
    {
        author: 'gaizi',
        avatar: 'https://avatars.githubusercontent.com/u/57099417?v=4',
        content: (
            <p>
                天龙人永不为奴！！！
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(2, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
    {
        author: 'Visualdust',
        avatar: 'https://avatars.githubusercontent.com/u/33346934?v=4',
        content: (
            <p>
                预告一下，可能接下来两天有事要做，但我觉得，我只想写实验报告。
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(2, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
];
