import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppReducer } from "../store/AReducer";

type useScrollAnimationRefsReturnType = [ScrollAnimationRefs: any[], addScrollAnimationRefs: (instance: HTMLElement | null) => void];

/**
 * 
 * @returns [refs, addRefs]
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