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
                    header={<Title level={3}>来自桂电</Title>}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <li>
                            <Comment
                                actions={item.actions}
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
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: 'Therainisme',
        avatar: 'http://therainisme.com:1225/Therainisme/img/avatar.jpg',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: 'Visualdust',
        avatar: 'https://avatars.githubusercontent.com/u/33346934?v=4',
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(2, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
];
