export function delay<T extends (...args: any[]) => void>(func: T, dalay: number) {
    var timer: any = null
    return (...args: Parameters<T>): void => {
        clearTimeout(timer)
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