
// import { useRouter } from "next/navigation";

import ApplicationDevelopmentDallas from "@/components/services/application-development-dallas/page";
import BrandingAgencyDallas from "@/components/services/branding-agency-dallas/page";
import ContentMarketingDallas from "@/components/services/content-marketing-dallas/page";
import DigitalMarketingDallas from "@/components/services/digital-marketing-dallas/page";
import EcommerceMarketingDallas from "@/components/services/ecommerce-marketing-dallas/page";
import EmailMarketingDallas from "@/components/services/email-marketing-dallas/page";
import GraphicDesigningDallas from "@/components/services/graphic-designing-dallas/page";
import InternetMarketingDallas from "@/components/services/internet-marketing-dallas/page";
import ListingServiceDallas from "@/components/services/listing-service-dallas/page";
import ReputationManagementDallas from "@/components/services/reputation-management-dallas/page";
import SearchEngineMarketingDallas from "@/components/services/search-engine-marketting-dallas/page";
import SeoServicesDallas from "@/components/services/seo-services-dallas/page";
import SocialMediaMarketingDallas from "@/components/services/social-media-marketing-dallas/page";
import SoftwareDevelopmentDallas from "@/components/services/software-development-dallas/page";
import VirtualEmployeesServicesDallas from "@/components/services/virtual-employees-services-dallas/page";
import WebsiteDesignDallas from "@/components/services/website-design-dallas/page";
import WebsiteDevelopmentDallas from "@/components/services/website-development-dallas/page";


export default function ServicesWrapper({ params }) {
    // const router = useRouter();
    const [template, slug] = params.slug

    // Template mapping object
    const templateComponents = {
        'web-development': WebsiteDevelopmentDallas,
        'brand-agency': BrandingAgencyDallas,
        'graphic-design': GraphicDesigningDallas,
        'software-development': SoftwareDevelopmentDallas,
        'website-design': WebsiteDesignDallas,
        'application-development': ApplicationDevelopmentDallas,
        'virtual-employ': VirtualEmployeesServicesDallas,
        'reputation-management': ReputationManagementDallas,
        'internet-marketing': InternetMarketingDallas,
        'listing-service': ListingServiceDallas,
        'content-marketing': ContentMarketingDallas,
        'email-marketing': EmailMarketingDallas,
        'search-engine-marketing': SearchEngineMarketingDallas,
        'ecommerce-marketing': EcommerceMarketingDallas,
        'social-media-marketing': SocialMediaMarketingDallas,
        'seo-service': SeoServicesDallas,
        'digital-marketing': DigitalMarketingDallas,
    };

    // Get the component based on template name
    const ComponentToRender = templateComponents[template];

    // If no matching template found, return a fallback or null
    if (!ComponentToRender) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center">Service Not Found</h1>
                <p className="text-center mt-4">The requested service template "{template}" is not available.</p>
            </div>
        );
    }

    return (
        <>
            <ComponentToRender template={template} slug={slug} />
        </>
    )
}