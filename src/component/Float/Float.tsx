import React from "react";
import { Component } from "react";

interface IProp {
    children: React.ReactNode
    crossBorder?: boolean
    speed: number
    initialPosition?: { x: number, y: number }
    onmoving?: (position: { x: number, y: number }) => void;
}

class Float extends Component<IProp> {


    state = {
        nowY: this.props.initialPosition ? this.props.initialPosition.y : 10,
        nowX: this.props.initialPosition ? this.props.initialPosition.x : 10,
        targetX: 100,
        targetY: 100,
        mouseX: 0,
        mouseY: 0,
        cursor: "pointer",
        raf: null
    }

    private menu: React.RefObject<HTMLDivElement> = React.createRef()

    render() {
        const { children } = this.props
        const { nowY, nowX, cursor } = this.state
        return (
            <div>
                <div ref={this.menu}
                    style={{ top: nowY + 'px', left: nowX + 'px', cursor, position: "fixed", zIndex: 100 }}
                >
                    {children}
                </div>
            </div>
        );
    }

    handleMove(e: MouseEvent | TouchEvent) {
        e.preventDefault();
        const isTouch = !(e as MouseEvent).clientX
        if (isTouch) {
            this.setState({
                mouseX: (e as TouchEvent).changedTouches[0].clientX - this.menu.current!.offsetLeft,
                mouseY: (e as TouchEvent).changedTouches[0].clientY - this.menu.current!.offsetTop
            })
        } else {
            this.setState({
                cursor: "move",
                mouseX: (e as MouseEvent).clientX - this.menu.current!.offsetLeft,
                mouseY: (e as MouseEvent).clientY - this.menu.current!.offsetTop
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
        const endMoving = (e: MouseEvent | TouchEvent) => {
            this.setState({ cursor: "pointer" })
            document.removeEventListener('mousemove', moving);
            document.removeEventListener('mouseup', endMoving);
            document.removeEventListener('touchmove', moving)
            document.removeEventListener('touchend', endMoving)
        }
        document.addEventListener('mousemove', moving);
        document.addEventListener('mouseup', endMoving);
        document.addEventListener('touchmove', moving)
        document.addEventListener('touchend', endMoving)
    }

    componentDidMount() {
        const el = this.menu.current!
        el.addEventListener("mousedown", event => { this.handleMove(event); })
        el.addEventListener("touchstart", event => { this.handleMove(event); })
    }

    moveTo(targetX: number, targetY: number) {
        this.props.onmoving?.({x: targetX, y:targetY})

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
                let dLeft = (targetX - nowX) * dTime / this.props.speed
                let dTop = (targetY - nowY) * dTime / this.props.speed
                let willX, willY;
                if (Math.abs(dLeft) < 0.03 && Math.abs(dTop) < 0.03) {
                    willX = targetX, willY = targetY
                    this.setState({ raf: null, })
                } else {
                    willX = nowX + dLeft, willY = nowY + dTop
                    requestAnimationFrame(callback)
                }
                if (this.props.crossBorder === true) {
                    const border = { top: 10, left: 10, bottom: document.documentElement.clientHeight - 60, right: document.documentElement.clientWidth - 60 }
                    if (willX < border.left) willX = border.left
                    if (willY < border.top) willY = border.top
                    if (willX >= border.right) willX = border.right
                    if (willY >= border.bottom) willY = border.bottom
                }
                this.setState({
                    nowX: willX,
                    nowY: willY,
                })
            }
            const raf = requestAnimationFrame(callback)
            this.setState({ raf })
        }
    }
}

export default Float;