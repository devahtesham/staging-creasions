import ContactForm from '@/components/views/contact-us/ContactForm'
import Newsletter from '@/components/views/contact-us/Newsletter'
import React from 'react'

import { metadata as pageMetadata } from "@/components/mocks/metadata/contact-us/metadata";


export const metadata = pageMetadata;

export default function page() {
    return (
        <main>
            <Newsletter />
            <ContactForm />
            <div className="row">
                <div className="col-lg-12 justify-content-center text-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.269475384231!2d-96.6954099!3d33.065409800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19d40eddbead%3A0xb476c0c4e0c02414!2sCreasions%20Digital!5e1!3m2!1sen!2sus!4v1746814264288!5m2!1sen!2sus"
                        style={{ border: 0 , width: "100%", height: "450px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>


            </div>
        </main>
    )
}