import React from 'react'

export default function Section4({ packagesData }) {
  const sectionHeading = packagesData?.section_heading || "Content Marketing Services Packages - Tailored Solutions for Your Business";
  const sectionSpan = packagesData?.section_span || "Boost Engagement, Improve SEO & Establish Thought Leadership";
  const sectionText = packagesData?.section_text?.replace(/<[^>]*>/g, '') || "At Creasions, we offer flexible content marketing services in Dallas designed to help businesses enhance brand authority, increase organic traffic, and engage audiences with high-quality content. Choose from our custom blog content packages and let our expert content strategists, writers, and designers bring your brand story to life.";
  const packages = packagesData?.card || [];

  // Helper function to decode HTML entities and parse content
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const parseContent = (htmlContent) => {
    if (!htmlContent) return { text: '', listItems: [] };
    
    // Extract text content
    const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
    const text = textMatch ? decodeHtmlEntities(textMatch[1]) : '';
    
    // Extract list items
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    const listItems = listMatches.map(item => 
      decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim())
    );
    
    return { text, listItems };
  };

  const defaultPackages = [
    {
      title: "Standard Blog",
      span: "2 Blog Posts/Month (500 Words Each)",
      tag: "Ideal for:",
      ideal_for: "Small businesses & startups looking to build an online presence.",
      description: "<p>Looking for an easy way to kickstart your blog strategy? Our Standard Blog Content Generation package provides two well-researched, SEO-optimized blog posts per month, helping your website gain traction and authority.</p><ul><li>Two (2) 500-word blog posts per month</li><li>Industry research & topic ideation (5 topics/month)</li><li>SEO keyword optimization for better search rankings</li><li>One (1) custom graphic or stock image per post</li><li>Monthly performance reporting</li></ul>"
    },
    {
      title: "Business Blog",
      span: "3 Blog Posts/Month (500 Words Each)",
      tag: "Ideal for:",
      ideal_for: "Mid-sized businesses & brands aiming for consistent audience engagement.",
      description: "<p>Consistent content drives audience engagement and search engine visibility. Our Business Blog Content Generation package ensures a steady flow of relevant, engaging, and informative blog content to position your brand as an industry expert.</p><ul><li>Three (3) 500-word blog posts per month</li><li>Industry buzzword research & trend analysis</li><li>Topic ideation (10 topics/month)</li><li>SEO-optimized content to improve rankings</li><li>One (1) custom graphic or stock image per post</li><li>Monthly analytics & content performance reporting</li></ul>",
      isPopular: true
    },
    {
      title: "Premium Blog",
      span: "4 Blog Posts/Month (500 Words Each)",
      tag: "Ideal for:",
      ideal_for: "Established businesses looking to become thought leaders in their industry.",
      description: "<p>Ready to dominate your industry with expert-level content? Our Premium Blog Content Generation package goes beyond basic blogging by incorporating a comprehensive content strategy that keeps your audience informed and engaged.</p><ul><li>Four (4) 500-word blog posts per month</li><li>Advanced content strategy development</li><li>Topic ideation (10 topics/month)</li><li>SEO-optimized blog content for higher rankings</li><li>Two (2) custom graphics or stock images per post</li><li>Monthly insights & content performance tracking</li></ul>"
    },
    {
      title: "Individual Blog",
      span: "One-Off Blog Posts",
      tag: "Ideal for:",
      ideal_for: "businesses that require flexible, on-demand content to stay relevant.",
      description: "<p>Need content for a timely event, announcement, or trending topic? Our one-time blog content service delivers well-researched, engaging blog posts that keep your audience updated.</p><ul><li>Custom one-off blog posts as needed</li><li>Timely content for industry trends & announcements</li><li>SEO-optimized & audience-focused writing</li></ul>"
    }
  ];

  const displayPackages = packages.length > 0 ? packages : defaultPackages;
  return (
    <section className="section-04">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <h5>{sectionSpan}</h5>
                <p>{sectionText}</p>
            </div>
            <div className="packages-grid-box">
              {displayPackages.map((pkg, index) => {
                const { text, listItems } = parseContent(pkg.description);
                const isPopular = index === 1; // Second package is popular
                
                if (isPopular) {
                  return (
                    <div key={index} className="BadgeBox">
                      <h2>Popular choice</h2>
                      <div className="packages-grid pupular-box">
                        <div className="package-head">
                          <h2>{pkg.title}</h2>
                          <p>{pkg.span}</p>
                        </div>
                        <div className="package-body">
                          <p>{text}</p>
                          {listItems.length > 0 && (
                            <ul>
                              {listItems.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="package-foot">
                          <h2>{pkg.tag}</h2>
                          <p dangerouslySetInnerHTML={{ __html: pkg.ideal_for }} />
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div key={index} className={`packages-grid ${index === 2 ? 'blue-box' : ''}`}>
                    <div className="package-head">
                      <h2>{pkg.title}</h2>
                      <p>{pkg.span}</p>
                    </div>
                    <div className="package-body">
                      <p>{text}</p>
                      {listItems.length > 0 && (
                        <ul>
                          {listItems.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="package-foot">
                      <h2>{pkg.tag}</h2>
                      <p dangerouslySetInnerHTML={{ __html: pkg.ideal_for }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}