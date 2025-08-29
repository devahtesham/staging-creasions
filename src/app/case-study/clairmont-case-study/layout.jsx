import React from 'react'
import { Poppins, Domine } from "next/font/google";
import Header from '@/components/views/case-study/clairmont-page/Header';


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
        <html>
            <body className={`${poppins.className} px-24`}>
                <Header />
                {children}
            </body>
        </html>
    )
}
