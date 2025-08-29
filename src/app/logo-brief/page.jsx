"use client";

import React, { useState } from 'react';
import '@/app/css/LogoBrief.css';

export default function LogoBrief() {
    const [formData, setFormData] = useState({
        contactPersonName: '',
        contactEmailAddress: '',
        contactPhoneNumber: '',
        logoName: '',
        companySlogan: '',
        competitorsReference: '',
        businessDescription: '',
        logoDetails: '',
        primaryColor: '',
        secondaryColor: '',
        // attachment: null,
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files[0], // store the first file selected
        }));
    };

    // Function to validate phone number format
    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^[\d\+\-\(\) ]+$/;  // Allow digits, plus, minus, parentheses, and spaces
        return regex.test(phoneNumber);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending');
        
        // Check if mandatory fields are filled before submitting
        if (!formData.contactPersonName || !formData.contactEmailAddress || !formData.contactPhoneNumber || !formData.logoName || !formData.businessDescription) {
            setStatus('Please fill in all required fields.');
            return;
        }

        // Validate phone number
        if (!validatePhoneNumber(formData.contactPhoneNumber)) {
            setStatus('Please enter a valid phone number.');
            return;
        }

        // Log form data to debug before submission
        console.log('Form Data to Send:', formData);

        try {
            const updatedFormData = {
                ...formData,
                page: window.location.href,  // Set current page URL
              };

            const response = await fetch('/api/send-logo-brief', {
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
            console.error(error);  // Log any unexpected errors
        }
    };

    return (
        <section className="logo-brief">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Business Information</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="contactPersonName">Contact Person Name*</label>
                                <input
                                    type="text"
                                    id="contactPersonName"
                                    name="contactPersonName"
                                    value={formData.contactPersonName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactEmailAddress">Contact Email Address*</label>
                                <input
                                    type="email"
                                    id="contactEmailAddress"
                                    name="contactEmailAddress"
                                    value={formData.contactEmailAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactPhoneNumber">Contact Phone Number*</label>
                                <input
                                    type="tel"
                                    id="contactPhoneNumber"
                                    name="contactPhoneNumber"
                                    value={formData.contactPhoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="logoName">Logo Name*</label>
                                <input
                                    type="text"
                                    value={formData.logoName}
                                    onChange={handleChange}
                                    id="logoName"
                                    name="logoName"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="companySlogan">Company Slogan</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.companySlogan}
                                    id="companySlogan"
                                    name="companySlogan"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="competitorsReference">Competitors Reference (Optional)</label>
                                <textarea id="competitorsReference" value={formData.competitorsReference}
                                    onChange={handleChange} name="competitorsReference" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="businessDescription">Describe your business*</label>
                                <textarea
                                    id="businessDescription"
                                    name="businessDescription"
                                    rows={5}
                                    value={formData.businessDescription}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="logoDetails">What you want in your logo (Any additional details)</label>
                                <textarea
                                    id="logoDetails"
                                    name="logoDetails"
                                    value={formData.logoDetails}
                                    onChange={handleChange}
                                    rows={5}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="primaryColor">Primary Color</label>
                                <input
                                    type="text"
                                    value={formData.primaryColor}
                                    onChange={handleChange}
                                    id="primaryColor"
                                    name="primaryColor"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="secondaryColor">Secondary Color</label>
                                <input
                                    type="text"
                                    value={formData.secondaryColor}
                                    onChange={handleChange}
                                    id="secondaryColor"
                                    name="secondaryColor"
                                />
                            </div>
                            <button type="submit" name="formsubmit" style={{ margin: "15px auto", display: "block" }}>
                                Submit
                            </button>
                        </form>
                        {status && <p className="status">{status}</p>} {/* Display submission status */}
                    </div>
                </div>
            </div>
        </section>
    );
}
