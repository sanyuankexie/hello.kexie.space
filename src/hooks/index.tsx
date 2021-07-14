import React from "react";
import { useSelector } from "react-redux";
import { AppReducer } from "../store/AReducer";

type useScrollDisplayElementRefsReturnType = [scrollDisplayElementRefs: any[], addScrollDisplayElementRefs: (instance: HTMLAnchorElement | null) => void];

export function useScrollDisplayElementRefs() : useScrollDisplayElementRefsReturnType{
    const scrollDisplayElementRefs = useSelector(({ clientReducer }: AppReducer) => clientReducer.scrollDisplayElementRefs);

    function addScrollDisplayElementRefs(element: HTMLElement) {
        if (element) {
            const elementRef = React.createRef() as any;
            elementRef.current = element;
            scrollDisplayElementRefs.push(elementRef);
            scrollDisplayElementRefs.forEach(x => {
                x.current.style.transform = "translateY(10px)";
            })
        }
    }

    return [scrollDisplayElementRefs, addScrollDisplayElementRefs] as useScrollDisplayElementRefsReturnType;
}