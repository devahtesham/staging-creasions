import React from 'react'
import HeaderLogo from '/public/header-logo-2.webp'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="ires-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link href="/" target='_parent'>
                            <img
                                src= "https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/logo-6-1.png"
                                alt="ires-logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
