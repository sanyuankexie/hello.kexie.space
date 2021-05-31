import { Comment, List, Typography } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import MarkdownParser from './../../../utils/markdown';
import { CommentAPI } from '../../../api';
import './Comment.css'
import css from './Comment.module.css'

const { Title } = Typography

interface IComment {
    author: string
    avatar: string
    content: any
    datetime: JSX.Element | string
}

function CommentList() {
    const [commentList, setCommentList] = useState<Array<IComment>>();

    useEffect(() => {
        axios.get(CommentAPI.GithubIssueUrl)
            .then((res) => {
                const commmentList = res.data.map((x: any): IComment => {
                    const { user, body, updated_at } = x;
                    const { login, avatar_url } = user
                    return {
                        author: login,
                        avatar: avatar_url,
                        content: MarkdownParser.render(body),
                        datetime: moment(updated_at).format('YYYY-MM-DD HH:mm:ss') as unknown as string
                    }
                })
                setCommentList(commmentList)
            })
    }, []);

    return (
        <div>
            <List
                header={<Title level={3}>畅心所言</Title>}
                itemLayout="horizontal"
                dataSource={commentList}
                renderItem={(item: IComment) => (
                    <li>
                        <Comment
                            className={css.comment}
                            author={item.author}
                            avatar={item.avatar}
                            content={(
                                <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
                            )}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
        </div>
    )
}

export default CommentList;
