
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
    console.log('[template]', template)
    // Template mapping object
    const templateComponents = {
        'web-development': WebsiteDevelopmentDallas,                        // DONE
        'website-design': WebsiteDesignDallas,                              // DONE
        'digital-marketing': DigitalMarketingDallas,                        // DONE
        'brand-agency': BrandingAgencyDallas,                               //DONE
        'graphic-design': GraphicDesigningDallas,                           // DONE
        'software-development': SoftwareDevelopmentDallas,                 // DONE
        'application-development': ApplicationDevelopmentDallas,           // DONE
        'virtual-employees': VirtualEmployeesServicesDallas,               // DONE
        'reputation-management': ReputationManagementDallas,               // DONE
        'internet-marketing': InternetMarketingDallas,                     // DONE
        'listing-service': ListingServiceDallas,                           // DONE
        'content-marketing': ContentMarketingDallas,                       // DONE
        'email-marketing': EmailMarketingDallas,                           // DONE
        'search-engine-marketing': SearchEngineMarketingDallas,            // DONE
        'ecommerce-marketing': EcommerceMarketingDallas,                   // DONE
        'social-media-marketing': SocialMediaMarketingDallas,              // DONE
        'seo-service': SeoServicesDallas,                                  // DONE
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