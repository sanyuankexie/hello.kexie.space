import React, { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef, useState } from "react";
import { getEventClientPosition } from "../../utils";
import { Position } from "../BallRoom/type";
import { Handles, Prop } from "./type";

const initData = { x: 0, y: 0 };

const Float: ForwardRefRenderFunction<Handles, Prop> = ({ speed = 256, initPosition, zIndex = 100, children, onMoving }, that) => {
    const ref = useRef<HTMLDivElement>(null!);
    const [now, setNow] = useState<Position>(initPosition ? initPosition : initData);
    const [target, setTarget] = useState<Position>(initData);
    const [revise, setRevise] = useState<Position>(initData);
    const [raf, setRaf] = useState<number | null>(null);
    const [cursor, setCursor] = useState<"pointer" | "move">("pointer");

    // 暴露给父组件的方法，可以使Float不需要事件触发即可改变位置
    useImperativeHandle(that, () => ({ letItMoveTo }), []);

    // 使回调函数获取到最新的 now、target和revise
    const getFloatElementInfoRef = useRef<() => [now: Position, target: Position, revise: Position]>();
    getFloatElementInfoRef.current = () => [now, target, revise];

    // 使回调函数获取到最新的 raf 
    const getFloatrequestAnimationFrameRef = useRef<any>();
    getFloatrequestAnimationFrameRef.current = () => raf;

    /**
     * @description 拖拽事件的开始
     */
    function startDrag(e: MouseEvent | TouchEvent) {
        function revisePosition() {
            const { clientX, clientY } = getEventClientPosition(e);
            const x = clientX - ref.current.offsetLeft;
            const y = clientY - ref.current.offsetTop;
            setRevise({ x, y });
        }
        function mountEventListener() {
            setCursor("move");
            document.addEventListener("mousemove", handleDragging);
            document.addEventListener("mouseup", unmountEventListener);
            document.addEventListener("touchmove", handleDragging);
            document.addEventListener("touchend", unmountEventListener);
        }
        function unmountEventListener() {
            setCursor("pointer");
            document.removeEventListener("mousemove", handleDragging);
            document.removeEventListener("mouseup", unmountEventListener);
            document.removeEventListener("touchmove", handleDragging);
            document.removeEventListener("touchend", unmountEventListener);
        }

        e.preventDefault(); // 防止div元素被拖动
        revisePosition();
        mountEventListener();
    }

    /**
     * @description 每一次move都会执行这个函数，
     * 它会不断地设置终点值target和调用letItMoveTo让小球不断移动
     */
    function handleDragging(e: MouseEvent | TouchEvent) {
        const { clientX, clientY } = getEventClientPosition(e);
        // 这里如果直接使用 revise["x"] 和 revise["y"] 获取到的值不是最新的
        const x = clientX - getFloatElementInfoRef.current!()[2]["x"];
        const y = clientY - getFloatElementInfoRef.current!()[2]["y"];
        setTarget({ x, y });
        letItMoveTo({ x, y });
    }

    /**
     * 这个函数不止 handleDragging 会调用，也会暴露给BallRoom
     * @description 传入一个位置，Float元素会向该位置平滑移动
     */
    function letItMoveTo(target: Position) {
        if (onMoving) onMoving(target); // 告诉父组件移动的位置信息
        if (target) setTarget(target);  // 设置target为父组件传入的位置信息
        if (getFloatrequestAnimationFrameRef.current!() !== null) return;
        let prevRenderTime = Date.now();

        /**
         * @description 渲染下一帧的函数
         */
        function renderNextFrame() {
            // 获取必要的信息
            const [now, target] = getFloatElementInfoRef.current!();
            const nowTime = Date.now();
            const dTime = nowTime - prevRenderTime;
            prevRenderTime = nowTime;

            // 计算一次移动的距离
            let dLeft = (target["x"] - now["x"]) * dTime / speed;
            let dTop = (target["y"] - now["y"]) * dTime / speed;

            // 开始确定位置
            let will = {} as Position;
            if (Math.abs(dLeft) < 0.03 && Math.abs(dTop) < 0.03) {
                // 如果很近
                will["x"] = target["x"];
                will["y"] = target["y"];
                setRaf(null);
            } else {
                // 如果比较远
                will["x"] = now["x"] + dLeft;
                will["y"] = now["y"] + dTop;
                requestAnimationFrame(renderNextFrame);
            }
            setNow(will);
        }

        setRaf(requestAnimationFrame(renderNextFrame));
    }

    useEffect(() => {
        ref.current.addEventListener("mousedown", startDrag);
        ref.current.addEventListener("touchstart", startDrag);

        return () => {
            ref.current?.removeEventListener("mousedown", startDrag);
            ref.current?.removeEventListener("touchstart", startDrag);
        }
    }, []);

    return (
        <div>
            <div
                ref={ref}
                style={{
                    top: now.y + 'px',
                    left: now.x + 'px',
                    position: "fixed",
                    zIndex, cursor
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default forwardRef(Float);