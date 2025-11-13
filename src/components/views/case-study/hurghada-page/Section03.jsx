import React from 'react'
import yellowstarbg from '/public/hurghada-image/yellow-star-bg.png'

export default function Section03() {
  return (
    <section className="section03">
        <div className="container">
            <div className="row">
                <div className="col-lg-12" style={{backgroundImage: `url(${yellowstarbg.src})`}}>
                    <div className="text">
                        <h2>Features Delivered</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Immersive Hero Sections</td>
                                <td>Full-screen visuals showcasing Hurghada&apos;s crystal-clear beaches and lifestyle</td>
                            </tr>
                            <tr>
                                <td>Dynamic Listings</td>
                                <td>Hotels, restaurants, excursions, and travel agencies with filters and categories</td>
                            </tr>
                            <tr>
                                <td>Multilingual Ready</td>
                                <td>Structure ready for Arabic, English, and other future expansions</td>
                            </tr>
                            <tr>
                                <td>Smart CMS</td>
                                <td>Admin can easily manage guides, blog artices, an service partners</td>
                            </tr>
                            <tr>
                                <td>Travel Blog Module</td>
                                <td>Optimized for content marketing and organic search traffic</td>
                            </tr>
                            <tr>
                                <td>Booking Inquiry Forms</td>
                                <td>Custom PHP forms integrated for lead generation and contact</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
