import React, {Component} from 'react';
import css from './FloatMenu.module.css'
import logo from '../../assets/images/logo.png'

class FloatMenu extends Component {

    state = {
        nowY: 10,
        nowX: 10,
        targetX: 100,
        targetY: 100,
        mouseX: 0,
        mouseY: 0,
        cursor: "pointer",
        raf: null
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
        this.setState({
            cursor: "move",
            mouseX: e.clientX - this.menu.current!.offsetLeft,
            mouseY: e.clientY - this.menu.current!.offsetTop
        })

        const moving = (e: MouseEvent) => {
            // 获取当前鼠标位置作为目标位置
            // 如果鼠标不移动，将不会变更目标位置
            let targetX = e.clientX
            let targetY = e.clientY
            let lastTime = Date.now();
            // 鼠标点击元素的位置
            this.setState({targetX, targetY})
            if (!this.state.raf) {
                const callback = () => {
                    // 进入定时器内部
                    // 获取当前元素位置
                    let {nowX, nowY, targetX, targetY, mouseX, mouseY} = this.state
                    targetX -= mouseX
                    targetY -= mouseY
                    // 计算增量
                    const now = Date.now()
                    let dTime = now - lastTime
                    lastTime = now
                    let dLeft = (targetX - nowX) * dTime / 256
                    let dTop = (targetY - nowY) * dTime / 256
                    if (Math.abs(dLeft) < 0.03 && Math.abs(dTop) < 0.03) {
                        this.setState({
                            nowX: targetX,
                            nowY: targetY,
                            raf: null,
                        })
                    } else {
                        this.setState({
                            nowX: nowX + dLeft,
                            nowY: nowY + dTop,
                        })
                        requestAnimationFrame(callback)
                    }
                }
                const raf = requestAnimationFrame(callback)
                this.setState({raf})
            }
        }

        const endMoving = (e: MouseEvent) => {
            document.removeEventListener('mousemove', moving);
            document.removeEventListener('mouseup', endMoving);
            this.setState({cursor: "pointer"})
        }
        document.addEventListener('mousemove', moving);
        document.addEventListener('mouseup', endMoving);
    }
}

export default FloatMenu;