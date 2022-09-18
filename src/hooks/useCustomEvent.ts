import { useCallback, useEffect } from 'react';

export type CustomEventHandler<EventArgs> = (event: CustomEvent<EventArgs>) => void;

export function useCustomEventDispatcher<EventArgs>(eventName: string, targetID?: string) {

    const dispatchEvent = useCallback((args?: EventArgs) => {
        const event = new CustomEvent<EventArgs>(eventName, {detail: args});
        const targetElement = targetID ? document.getElementById(targetID) : undefined;
        const target = targetElement || document;

        console.log(eventName);
        target.dispatchEvent(event);
    }, []);
    
    return dispatchEvent;
}

export function useCustomEventHandler<EventArgs>(eventName: string, handler: CustomEventHandler<EventArgs>, targetID?: string) {
    useEffect(() => {
        const targetElement = targetID ? document.getElementById(targetID) : undefined;
        const target = targetElement || document;

        target.addEventListener(eventName, handler);

        return () => target.removeEventListener(eventName, handler);
    }, [handler]);
}
