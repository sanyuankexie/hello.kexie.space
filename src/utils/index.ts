export function debounce<T extends (...args: any[]) => void>(func: T, dalay: number) {
    let timer: any = null
    return (...args: Parameters<T>): void => {
        if (!!timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, dalay)
    }
}

export function throttle<T extends (...arg: any[]) => void>(func: T, interval: number) {
    let _args: any = null;
    let _timer: any = null;
    return (...args: Parameters<T>) => {
        _args = args;
        if (!_timer) {
            _timer = setTimeout(() => {
                func(..._args);
                _timer = null;
            }, interval);
        }
    }
}

export function getCliendIp(): string {
    return (window as any).returnCitySN.cip;
}

export function toHump(target: string, separator?: string): string {
    if (separator === undefined) separator = '_';
    const strs = target.split(separator);

    for (let i = 0; i < strs.length; ++i) {
        strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].substring(1);
    }
    return strs.join('');
}

/**
 * @description 获取点击事件或者触摸事件的clientX和clientY
 */
export function getEventClientPosition(e: MouseEvent | TouchEvent) {
    if ((e as MouseEvent).clientX) {
        return {
            clientX: (e as MouseEvent).clientX,
            clientY: (e as MouseEvent).clientY
        };
    } else {
        return {
            clientX: (e as TouchEvent).changedTouches[0].clientX,
            clientY: (e as TouchEvent).changedTouches[0].clientY
        };
    }
}