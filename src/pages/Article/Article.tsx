import React, {Component} from 'react';

import css from './Article.module.css'
import Header from "./Header/Header";

import logo from "../../assets/images/logo.png"
import MD from "../../assets/images/department/multimedia-department.png"
import SD from "../../assets/images/department/software-depertment.png"
import HD from "../../assets/images/department/hardware-department.png"
import OD from "../../assets/images/department/organization-department.png"

const MarkdownIt = require('markdown-it')

interface Props {
    location: any
    match: any
}

class Article extends Component<Props> {
    state = {
        content: ""
    }

    private markdownElements: React.RefObject<HTMLElement> = React.createRef()

    render() {
        const {params} = this.props.match
        const department = params.target.split('#')[0]
        const icon = department === 'multimedia-department' ? MD :
                     department === 'software-department' ? SD:
                     department === 'hardware-department' ? HD:
                     OD
        return (
            <article className={`${css.article} ${css.container}`}>
                <Header
                    icon={icon}
                    content="我现在是想测试一下多媒体部的效果"
                    author="Therainisme"
                    published="March 22, 2021"
                />
                <span dangerouslySetInnerHTML={{__html: this.state.content}} ref={this.markdownElements}>
                </span>
            </article>
        );
    }

    componentDidMount() {
        // todo get markdown text from server
        const {target} = this.props.match.params
        const md = new MarkdownIt();
        this.setState({content: md.render(content)})
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        const h2List: HTMLCollection = this.markdownElements.current!.getElementsByTagName('h2')
        const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const {hash} = window.location;
        // todo modified scroll height
    }
}

export default Article;


const content = `## 关于多媒体部门

三院科协多媒体部，是科协的三大技术部门之一。 （多媒体部有很多好看的师兄师姐的） 

多媒体部现有的学习方向有：网站开发、UI设计、3D建模以及视频剪辑。 它旨在培养一批充满活力，具有设计美感，掌握本专业所需的基础理论、专业知识以及具有创新精神的复合型人才。

多媒体部同时也会承担一些科协内部的宣传工作。如果你想开发出自己独特的网站、剪辑出超爆款视频、设计出精美的UI以及模型，那么加入多媒体是你不二之选！

## 网站开发

The introduction serves two purposes:

- Stimulating and interests the subject
- Putting the article in the large context

Generally introductions achieve these goals by leading the reader from the \`General\`(what is already known to the topic), to the \`Specific\`(what is not yet known), to the \`Focused Question\`(what the authors are asking). Thus, the authors describe previous works and how they are related to it.

Before we move on to the next section, ask yourself why the authors did this study, and, does the researched question match up with the conclusions in the discussion?

The introduction serves two purposes:

- Stimulating and interests the subject
- Putting the article in the large context

Generally introductions achieve these goals by leading the reader from the \`General\`(what is already known to the topic), to the \`Specific\`(what is not yet known), to the \`Focused Question\`(what the authors are asking). Thus, the authors describe previous works and how they are related to it.

Before we move on to the next section, ask yourself why the authors did this study, and, does the researched question match up with the conclusions in the discussion?

`
