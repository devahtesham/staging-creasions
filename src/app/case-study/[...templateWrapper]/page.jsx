import Baituticasestudy from "@/components/case-study/baituticasestudy/page";
import Boardline from "@/components/case-study/boardline/page";
import Clairmontcasestudy from "@/components/case-study/clairmontcasestudy/page";
import Commercialpluscasestudy from "@/components/case-study/commercialpluscasestudy/page";
import Empowercareinsurance from "@/components/case-study/empower-care-insurance/page";
import HurghadaCaseStudy from "@/components/case-study/hurghada-case-study/page";
import Kadobucasestudy from "@/components/case-study/kadobucasestudy/page";
import Lrescasestudy from "@/components/case-study/lrescasestudy/page";

export default function TemplateWrapper({ params }) {
    const [template, id] = params.templateWrapper;

    // Template mapping object
    const templateComponents = {
        'hurghada-case-study': HurghadaCaseStudy,                        
        'empower-care-insurance': Empowercareinsurance,                             
        'baituticasestudy': Baituticasestudy,                       
        'kadobucasestudy': Kadobucasestudy,                              
        'lrescasestudy': Lrescasestudy,                          
        'commercialpluscasestudy': Commercialpluscasestudy,               
        'clairmontcasestudy': Clairmontcasestudy,          
        'boardline': Boardline,                                           
    };

    // Get the component based on template name
    const ComponentToRender = templateComponents[template];

    // If no matching template found, return a fallback or null
    if (!ComponentToRender) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center">Case Study Not Found</h1>
                <p className="text-center mt-4">The requested case study template {template} is not available.</p>
            </div>
        );
    }

    return (
        <>
            <ComponentToRender template={template} id={id} />
        </>
    )
}