import React, { Component } from 'react';
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
        const { nowY, nowX, cursor } = this.state
        return (
            <div>
                <div ref={this.menu}
                    className={css.container}
                    style={{ top: nowY + 'px', left: nowX + 'px', cursor }}
                    onMouseDown={event => { this.handleMove(event); }}
                    onTouchStart={event => { this.handleMove(event); }}
                    onDragStart={event => event.preventDefault()}>
                    <img className={css.logo} src={logo} alt="" />
                </div>
            </div>
        );
    }

    handleMove(e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) {
        e.preventDefault();
        const isTouch = !(e as React.MouseEvent<HTMLDivElement, MouseEvent>).clientX
        if (isTouch) {
            this.setState({
                mouseX: (e as React.TouchEvent<HTMLDivElement>).changedTouches[0].clientX - this.menu.current!.offsetLeft,
                mouseY: (e as React.TouchEvent<HTMLDivElement>).changedTouches[0].clientY - this.menu.current!.offsetTop
            })
        } else {
            this.setState({
                cursor: "move",
                mouseX: (e as React.MouseEvent<HTMLDivElement, MouseEvent>).clientX - this.menu.current!.offsetLeft,
                mouseY: (e as React.MouseEvent<HTMLDivElement, MouseEvent>).clientY - this.menu.current!.offsetTop
            })
        }
        const moving = (e: MouseEvent | TouchEvent) => {
            // 获取当前鼠标位置作为目标位置
            // 如果鼠标不移动，将不会变更目标位置
            let targetX = 0, targetY = 0
            if (isTouch) {
                targetX = (e as TouchEvent).changedTouches[0].clientX
                targetY = (e as TouchEvent).changedTouches[0].clientY
            } else {
                targetX = (e as MouseEvent).clientX
                targetY = (e as MouseEvent).clientY
            }
            this.moveTo(targetX, targetY)
        }
        // todo 
        const endMoving = (e: MouseEvent | TouchEvent) => {
            this.setState({ cursor: "pointer" })
            document.removeEventListener('mousemove', moving);
            document.removeEventListener('mouseup', endMoving);
            document.removeEventListener('touchmove', moving)
        }
        document.addEventListener('mousemove', moving);
        document.addEventListener('mouseup', endMoving);
        document.addEventListener('touchmove', moving)
        document.addEventListener('touchend', endMoving)
    }

    moveTo(targetX: number, targetY: number) {
        let lastTime = Date.now();
        this.setState({ targetX, targetY })
        if (!this.state.raf) {
            const callback = () => {
                // 获取当前所需的位置信息
                let { nowX, nowY, targetX, targetY, mouseX, mouseY } = this.state
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
            this.setState({ raf })
        }
    }
}

export default FloatMenu;