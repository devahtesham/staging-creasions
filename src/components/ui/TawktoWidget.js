"use client";
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function TawktoWidget() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

            <TawkMessengerReact
                propertyId="6793f4f0825083258e0ad868"
                widgetId="1iicv9j3m"
                ref={tawkMessengerRef}/>
        </div>
    );
}