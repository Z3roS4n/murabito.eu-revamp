export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antonio Murabito",
    "url": "https://murabito.eu",
    "image": "https://murabito.eu/og-image.png",
    "sameAs": [
      "https://github.com/Z3roS4n",
      "https://www.instagram.com/z3ros4n/",
      "https://twitter.com/z3ros4n"
    ],
    "jobTitle": "Full Stack Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palermo",
      "addressRegion": "Sicilia",
      "addressCountry": "IT"
    },
    "knowsAbout": [
      "Web Development",
      "Full Stack Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "TailwindCSS",
      "Graphic Design",
      "UI/UX Design",
      "SEO Optimization"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Web Development"
    },
    "description": "Web Developer freelance a Palermo, operativo in tutta Italia. Specializzato nello sviluppo di applicazioni web moderne con Next.js, React e TypeScript."
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Antonio Murabito - Web Developer",
    "image": "https://murabito.eu/og-image.png",
    "url": "https://murabito.eu",
    "telephone": "+39-375-8509144",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palermo",
      "addressRegion": "Sicilia",
      "postalCode": "90046",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.1157",
      "longitude": "13.3615"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Italy"
    },
    "serviceType": [
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Graphic Design",
      "UI/UX Design",
      "SEO Optimization",
      "Website Design",
      "Web Application Development"
    ],
    "description": "Servizi professionali di sviluppo web e design grafico a Palermo e in tutta Italia. Realizzo siti web, applicazioni web moderne e soluzioni digitali personalizzate."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Antonio Murabito - Web Developer",
    "url": "https://murabito.eu",
    "description": "Portfolio professionale di Antonio Murabito, Web Developer e Graphic Designer a Palermo",
    "inLanguage": ["it-IT", "en-US"],
    "author": {
      "@type": "Person",
      "name": "Antonio Murabito"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://murabito.eu/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://murabito.eu"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://murabito.eu#aboutme"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://murabito.eu#projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://murabito.eu#contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
