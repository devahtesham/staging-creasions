"use client";
import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const updatedFormData = {
            ...formData,
            page: window.location.href,  // Set current page URL
        };

        try {
            const response = await fetch('/api/send-lp-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                window.location.href = window.location.origin + "/thankyou";
            } else {
                setStatus(result.error || 'Failed to send message.');
            }
        } catch (error) {
            setStatus('An error occurred.');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                size="40"
                maxLength="350"
                className="wpcf7-form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
            />
            <input
                size="40"
                maxLength="350"
                className="wpcf7-form-control"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                className="wpcf7-form-control"
                aria-required="true"
                placeholder="Phone Number"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <textarea
                cols="40"
                rows="5"
                maxLength="2000"
                className="wpcf7-form-control wpcf7-textarea"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
            ></textarea>

            <button className="form-btn" type="submit" required>
                Submit
            </button>
        </form>
    )
}
