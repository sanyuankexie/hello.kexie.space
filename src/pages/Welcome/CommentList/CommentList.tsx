import { Comment, List, Typography } from 'antd';
import moment from 'moment';
import './Comment.css'
import css from './Comment.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import MarkdownParser from './../../../utils/markdown';

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
        axios.get('https://api.github.com/repos/sanyuankexie/hellokexie/issues/6/comments')
            .then((res) => {
                console.log(res.data)
                const test = res.data.map((x: any): IComment => {
                    const { user, body, updated_at } = x;
                    const { login, avatar_url } = user
                    console.log(moment(updated_at).format('YYYY-MM-DD HH:mm:ss') as unknown as string)
                    return {
                        author: login,
                        avatar: avatar_url,
                        content: MarkdownParser.render(body),
                        datetime: moment(updated_at).format('YYYY-MM-DD HH:mm:ss') as unknown as string
                    }
                })
                setCommentList(test)
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
