/**
 * SEO Helper Functions
 */

export const generateSchemaMarkup = (type, data) => {
  const schemas = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      url: data.url,
      logo: data.logo,
      description: data.description,
      sameAs: data.sameAs || [],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: data.phone,
        email: data.email,
      },
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data.name,
      url: data.url,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${data.url}?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.items || [],
    },
  };

  return schemas[type] || null;
};

export const createStructuredData = (schema) => {
  return JSON.stringify(schema);
};

// Generate meta description (max 160 chars for optimal display)
export const truncateDescription = (text, maxLength = 160) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength).trim() + '...';
};

// Format URL for canonical tags
export const getCanonicalUrl = (path = '') => {
  const baseUrl = 'https://universityconnect.in';
  return path ? `${baseUrl}${path}` : baseUrl;
};

// Generate OpenGraph image URL
export const getOGImage = (type = 'default') => {
  const baseUrl = 'https://universityconnect.in/og-images';
  return `${baseUrl}/${type}.jpg`;
};
