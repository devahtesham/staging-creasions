import React from 'react'
import { Poppins, Domine } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export const domine = Domine({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});



export default function PageLayout({ children }) {
    return (
                <div className={`${poppins.className} px-24`}>
                        {children}
                </div>
    )
}
