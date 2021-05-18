import React, {Component} from 'react';
import css from './FloatMenu.module.css'
import logo from '../../assets/images/logo.png'

class FloatMenu extends Component {

    state = {
        top: 100,
        left: 100,
        cursor: "pointer",
        dTop: 0, // top的增量
        dLeft: 0, // left的增量
        interval: null
    }

    private menu: React.RefObject<HTMLDivElement> = React.createRef()

    render() {
        const {top, left, cursor} = this.state
        return (
            <div>
                <div ref={this.menu}
                     className={css.container}
                     style={{top: top + 'px', left: left + 'px', cursor}}
                     onMouseDown={event => this.startMoving(event)}
                     onDragStart={event => event.preventDefault()}>
                    <img className={css.logo} src={logo} alt=""/>
                </div>
            </div>
        );
    }

    startMoving(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        this.setState({cursor: "move"})
        document.onmousemove = this.moving()
        document.onmouseup = this.endMoving()
    }

    moving = () => {
        return (e: MouseEvent) => {
            const mouseX = e.clientX - this.menu.current!.offsetLeft
            const mouseY = e.clientY - this.menu.current!.offsetTop
            let {left, top} = this.state
            let nextLeft = mouseX / 60
            let nextTop = mouseY / 60
            console.log(mouseY, mouseX)
            this.setState({nextLeft, nextTop})
            // 移动当前元素
            if (nextLeft <= window.innerWidth - this.menu.current!.offsetWidth) {
                this.setState({
                    left: left + nextLeft,
                })
            }
            if (nextTop <= window.innerHeight - this.menu.current!.offsetHeight) {
                this.setState({
                    top: top + nextTop,
                })
            }
        }
    }

    endMoving() {
        return (e: MouseEvent) => {
            document.onmousemove = null
            document.onmouseup = null
            this.setState({cursor: "pointer"})
        }
    }
}

export default FloatMenu;