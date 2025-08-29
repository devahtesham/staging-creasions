"use client";

import React, { useState } from 'react';
import '@/app/css/WebBrief.css'

export default function Webbrief() {
    const [formData, setFormData] = useState({
        contactPersonName: '',
        contactEmailAddress: '',
        contactPhoneNumber: '',
        currentWebsiteURL: '',
        currentWebHost: '',
        domainPurchaseInfo: '',
        willProvideImages: '',
        allContentAvailable: '',
        companyDescription: '',
        themeFeel: '',
        designColors: '',
        competitorSites: '',
        additionalInfo: '',
        requiredPages: '',
        servicesOrProducts: '',
        competitiveAdvantage: '',
        customerAttraction: '',
        socialMediaPlatforms: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
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
        if (!formData.contactPersonName || !formData.contactEmailAddress || !formData.contactPhoneNumber || !formData.currentWebsiteURL || !formData.domainPurchaseInfo || !formData.willProvideImages || !formData.allContentAvailable || !formData.companyDescription || !formData.themeFeel || !formData.designColors || !formData.competitorSites || !formData.additionalInfo || !formData.requiredPages || !formData.servicesOrProducts || !formData.competitiveAdvantage || !formData.customerAttraction) {
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

            const response = await fetch('/api/send-web-brief', {
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
        <section className="web-brief">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Business Information</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="contactPersonName">Name*</label>
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
                                <label htmlFor="contactEmailAddress">Email*</label>
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
                                <label htmlFor="contactPhoneNumber">Phone*</label>
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
                                <label htmlFor="currentWebsiteURL">
                                    Current website URL: (e.g: https://domain.com/)
                                </label>
                                <input
                                    type="text"
                                    id="currentWebsiteURL"
                                    name="currentWebsiteURL"
                                    value={formData.currentWebsiteURL}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="currentWebHost">What is your current web host: *</label>
                                <input type="text" id="currentWebHost" name="currentWebHost" value={formData.currentWebHost} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="domainPurchaseInfo">
                                    Did you already purchase a domain? If yes, who with: (we will need access
                                    to that account later on)*
                                </label>
                                <input
                                    type="text"
                                    id="domainPurchaseInfo"
                                    name="domainPurchaseInfo"
                                    value={formData.domainPurchaseInfo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="willProvideImages">
                                    Will you be providing any images for the website:* (Say Yes or No)
                                </label>
                                <input
                                    type="text"
                                    id="willProvideImages"
                                    name="willProvideImages"
                                    value={formData.willProvideImages}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="allContentAvailable">
                                    Do you have all the content (text, info, articles, copy) available for
                                    your pages:*
                                </label>
                                <input
                                    type="text"
                                    id="allContentAvailable"
                                    name="allContentAvailable"
                                    value={formData.allContentAvailable}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyDescription">Briefly describe your company:*</label>
                                <textarea
                                    id="companyDescription"
                                    name="companyDescription"
                                    value={formData.companyDescription}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="themeFeel">
                                    Is there any specific theme/feel you want incorporated into your website:
                                    (multiple lines)*
                                </label>
                                <textarea
                                    id="themeFeel"
                                    name="themeFeel"
                                    value={formData.themeFeel}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="designColors">
                                    What colors were you looking to incorporate into the design?*
                                </label>
                                <input type="text" id="designColors" name="designColors" value={formData.designColors} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="competitorSites">
                                    Websites or your competitors or business whose sites you admire*
                                </label>
                                <textarea
                                    id="competitorSites"
                                    name="competitorSites"
                                    value={formData.competitorSites}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="additionalInfo">
                                    Additional Information: (To share any additional details)*
                                </label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="requiredPages">
                                    What are some pages you will need for your site?*
                                </label>
                                <textarea
                                    id="requiredPages"
                                    name="requiredPages"
                                    value={formData.requiredPages}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="servicesOrProducts">
                                    What services do you provide or how many products you will selling through
                                    your website*
                                </label>
                                <textarea
                                    id="servicesOrProducts"
                                    name="servicesOrProducts"
                                    value={formData.servicesOrProducts}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="competitiveAdvantage">
                                    What makes you better than your competition*
                                </label>
                                <textarea
                                    id="competitiveAdvantage"
                                    name="competitiveAdvantage"
                                    value={formData.competitiveAdvantage}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customerAttraction">
                                    How do you currently attract new customers*
                                </label>
                                <textarea
                                    id="customerAttraction"
                                    name="customerAttraction"
                                    value={formData.customerAttraction}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="socialMediaPlatforms">
                                    Social Media Platforms (e.g., Facebook, Instagram, Twitter, LinkedIn)
                                </label>
                                <input type="text" id="socialMediaPlatforms" name="socialMediaPlatforms" value={formData.socialMediaPlatforms} onChange={handleChange} />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="attachment">Select Attachment</label>
                                <input
                                    type="file"
                                    id="attachment"
                                    name="attachment"
                                    accept=".pdf, .jpg, .jpeg, .png, .doc, .docx"
                                />
                            </div> */}
                            <button type="submit" name="formsubmit" style={{ margin: "15px auto", display: "block" }}>
                            Submit
                            </button>
                        </form>
                        {status && <p className="status">{status}</p>} {/* Display submission status */}

                    </div>
                </div>
            </div>
        </section>

    )
}
