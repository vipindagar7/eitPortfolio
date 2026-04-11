import { siteConfig } from "@/data/siteConfig"

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Admissions",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
        },
        sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
            siteConfig.links.instagram,
            siteConfig.links.facebook,
        ],
    }
}

export function generateFAQSchema(faqs) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        image: `${siteConfig.url}/og-image.jpg`,
        description: siteConfig.description,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
            addressCountry: "IN",
        },
        telephone: siteConfig.contact.phone,
        url: siteConfig.url,
        sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
            siteConfig.links.instagram,
        ],
    }
}
