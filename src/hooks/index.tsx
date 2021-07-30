import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppReducer } from "../store/AReducer";

type useScrollAnimationRefsReturnType = [ScrollAnimationRefs: any[], addScrollAnimationRefs: (instance: HTMLElement | null) => void];

/**
 * 一个用于获取和添加【滚动弹出组件】的hook
 * @returns [refs, addRefs] = [获取ClientReducer中的被监听元素，向ClientReducer中新添加被监听的元素]
 */
export function useScrollAnimationRefs(): useScrollAnimationRefsReturnType {
    const scrollAnimationElementRefs = useSelector(({ clientReducer }: AppReducer) => clientReducer.ScrollAnimationRefs);

    function addScrollAnimationRefs(element: HTMLElement) {
        if (element) {
            const elementRef = React.createRef() as any;
            elementRef.current = element;
            scrollAnimationElementRefs.push(elementRef);
            scrollAnimationElementRefs.forEach(x => {
                x.current.style.transform = "translateY(10px)";
            })
        }
    }

    return [scrollAnimationElementRefs, addScrollAnimationRefs] as useScrollAnimationRefsReturnType;
}

/**
 * 必须是具有滚动条的组件。使用这个hook的组件，掌控着【滚动弹出组件(scrollAnimation)】的弹出时机。
 * @returns [refs, addRefs] = [获取ClientReducer中的被监听元素，向ClientReducer中新添加被监听的元素]
 */
export function useScrollHandler(): useScrollAnimationRefsReturnType {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollAnimationRefs();

    useEffect(() => {
        document.addEventListener("scroll", handlerScorll, true);

        return () => {
            document.removeEventListener("scroll", handlerScorll, true);
        }
    }, []);

    function handlerScorll(e: any) {
        ScrollAnimationRefs.forEach(x => {
            if (x.current.style) {
                x.current.style.transition = "all 1.25s";
                if (window.innerHeight - (window.innerHeight / 5) > x.current.getBoundingClientRect().top) {
                    x.current.style.visibility = "visible";
                    x.current.style.opacity = "1";
                    x.current.style.transform = "translateY(0px)";
                } else {
                    x.current.style.visibility = "hidden";
                    x.current.style.opacity = "0";
                    x.current.style.transform = "translateY(10px)";
                }
            }
        })
    }

    return [ScrollAnimationRefs, addScrollAnimationRefs];
}

/**
 * 当页面跳转时可以通过 saveScrollTop() 将当前页面滚动条的高度保存下来 [ScrollTop]。
 * 浏览器再次进入使用这个hook的页面时，恢复滚动条的高度。
 * @returns saveScrollTop()
 */
export function usePageJumpSaveScrollTop() {
    useEffect(() => {
        const scrollTop = localStorage.getItem("scrollTop");
        if (scrollTop) {
            localStorage.removeItem("scrollTop");
            document.body.scrollTop = ~~scrollTop;
        }
    }, []);

    function saveScrollTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        localStorage.setItem("scrollTop", JSON.stringify(scrollTop));
    }

    return saveScrollTop;
}