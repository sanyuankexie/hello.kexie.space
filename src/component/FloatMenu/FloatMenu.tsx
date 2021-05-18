import React, {Component} from 'react';
import css from './FloatMenu.module.css'
import logo from '../../assets/images/logo.png'

class FloatMenu extends Component {

    state = {
        nowY: 100,
        nowX: 100,
        targetX: 100,
        targetY: 100,
        cursor: "pointer",
        dTop: 0, // top的增量
        dLeft: 0, // left的增量
        interval: null
    }

    private menu: React.RefObject<HTMLDivElement> = React.createRef()

    render() {
        const {nowY, nowX, cursor} = this.state
        return (
            <div>
                <div ref={this.menu}
                     className={css.container}
                     style={{top: nowY + 'px', left: nowX + 'px', cursor}}
                     onMouseDown={event => this.startMoving(event)}
                     onDragStart={event => event.preventDefault()}>
                    <img className={css.logo} src={logo} alt=""/>
                </div>
            </div>
        );
    }

    startMoving(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.setState({cursor: "move"})
        document.onmousemove = this.moving
        document.onmouseup = this.endMoving
    }

    moving = (e: MouseEvent) => {
        // 获取当前鼠标位置作为目标位置
        // 如果鼠标不移动，将不会变更目标位置
        let targetX = e.clientX
        let targetY = e.clientY
        let mouseX = e.clientX - this.menu.current!.offsetLeft
        let mouseY = e.clientY - this.menu.current!.offsetTop
        this.setState({targetX, targetY})
        if (!this.state.interval) {
            const interval = setInterval(() => {
                // 进入定时器内部
                // 获取当前元素位置
                let {nowX, nowY, targetX, targetY} = this.state
                targetX -= mouseX
                targetY -= mouseY
                // 计算增量
                let dLeft = (targetX - nowX) / 16
                let dTop = (targetY - nowY) / 16
                // 移动当前元素
                this.setState({
                    nowX: nowX + dLeft,
                    nowY: nowY + dTop,
                })
                if (Math.abs(dLeft) < 0.03 && Math.abs(dTop) < 0.03) {
                    console.log("clear")
                    clearInterval(this.state.interval!)
                    this.setState({
                        nowX: targetX,
                        nowY: targetY,
                        interval: null,
                    })
                }
            }, 16)
            this.setState({interval})
        }
    }

    endMoving = (e: MouseEvent) => {
        document.onmousemove = null
        document.onmouseup = null
        this.setState({cursor: "pointer"})
    }
}

export default FloatMenu;