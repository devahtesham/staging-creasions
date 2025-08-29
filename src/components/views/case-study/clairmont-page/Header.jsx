import React from 'react'
import HeaderLogo from '/public/header-logo-2.webp'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="Clairmont-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link href="/" target='_parent'>
                            <img
                                src={HeaderLogo.src}
                                alt="creasions-logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
