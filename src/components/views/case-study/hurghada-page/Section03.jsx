import React from 'react'
import yellowstarbg from '/public/hurghada-image/yellow-star-bg.png'

export default function Section03({ data }) {
  const title = data?.title || 'Features Delivered'
  const tableHeading = data?.table_heading || 'Feature'
  const tableDescriptionHeading = data?.table_description_heading || 'Description'
  const table = data?.table || [
    { feature: 'Immersive Hero Sections', description: '<p>Full-screen visuals showcasing Hurghada&apos;s crystal-clear beaches and lifestyle</p>' },
    { feature: 'Dynamic Listings', description: '<p>Hotels, restaurants, excursions, and travel agencies with filters and categories</p>' },
    { feature: 'Multilingual Ready', description: '<p>Structure ready for Arabic, English, and other future expansions</p>' },
    { feature: 'Smart CMS', description: '<p>Admin can easily manage guides, blog artices, an service partners</p>' },
    { feature: 'Travel Blog Module', description: '<p>Optimized for content marketing and organic search traffic</p>' },
    { feature: 'Booking Inquiry Forms', description: '<p>Custom PHP forms integrated for lead generation and contact</p>' }
  ]

  return (
    <section className="section03">
        <div className="container">
            <div className="row">
                <div className="col-lg-12" style={{backgroundImage: `url(${yellowstarbg.src})`}}>
                    <div className="text">
                        <h2>{title}</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>{tableHeading}</th>
                                <th>{tableDescriptionHeading}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.feature}</td>
                                    <td>
                                        <div dangerouslySetInnerHTML={{ __html: row.description }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
