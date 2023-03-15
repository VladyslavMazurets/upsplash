import React, { useRef, useEffect } from 'react'

export const useClickOutside = (handler: () => void) => {
    const domNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const maybeHandler = (event: any) => {
            if (!domNode.current!.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', maybeHandler);

        return () => {
            document.removeEventListener('mousedown', maybeHandler)
        }
    })

    return domNode
}