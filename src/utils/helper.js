
export const STATIC_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzdXBlcl9hZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjM2MzU1MSwiZXhwIjoxNzU2NDQ5OTUxfQ.wngYY_Mmomb76EW3XN5xPh_5wHO8qopExePmqyK-VYs'
export const BASE_URL = 'https://crypto-ai.booksbeen.store'
// export const SITE_BASE_URL = 'https://creasions.com'
export const SITE_BASE_URL = 'https://staging-creasions.vercel.app'

// export const BASE_URL = 'http://localhost:8000'
/**
 * Fetches home page services from the API
 * @returns {Promise<Object>} Promise that resolves to the services data
 */
export const fetchHomeServices = async () => {
  console.log('fetchHomeServices')
  try {
    const response = await fetch(`${BASE_URL}/api/services`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data

  } catch (error) {
    console.error('Error fetching home services:', error);
    return null;
  }
};

/**
 * Fetches home page slider banners with simplified headers (recommended approach)
 * @param {string} token - Bearer token for authorization
 * @returns {Promise<Object>} Promise that resolves to the banner data
 */
export const fetchHomeBanners = async () => {
  console.log('fetchHomeBanners')
  try {
    const response = await fetch(`${BASE_URL}/api/home/slider-banner`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};
export const fetchWhoWeAreSection = async () => {
  console.log('fetchWhoWeAreSection')
  try {
    const response = await fetch(`${BASE_URL}/api/home/who-we-are`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};
export const fetchAchievementSection = async () => {
  console.log('fetchAchievementSection')
  try {
    const response = await fetch(`${BASE_URL}/api/home/agency-section`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};
export const fetchAchievementSectionIconBox = async () => {
  console.log('fetchAchievementSectionIconBox')
  try {
    const response = await fetch(`${BASE_URL}/api/home/icon-box`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};

export const fetchAchievementLogos = async (logo_type) => {
  console.log('fetchAchievementLogos')
  try {
    const response = await fetch(`${BASE_URL}/api/logoslider/filter/${logo_type}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};


export const fetchServicesWeProvideSection = async (logo_type) => {
  console.log('fetchAchievementLogos')
  try {
    const response = await fetch(`${BASE_URL}/api/services-tab`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};


export const fetchOurPortfolioSection = async () => {
  console.log('fetchAchievementLogos')
  try {
    const response = await fetch(`${BASE_URL}/api/portfolio-item`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};


export const fetchTestimonialsSectionHome = async () => {
  console.log('fetchTestimonialsSection')
  try {
    const response = await fetch(`${BASE_URL}/api/home/reviews?show_on_home=true`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};
export const fetchFaqSectionHome = async (page) => {
  console.log('fetchFaqSection')
  try {
    const response = await fetch(`${BASE_URL}/api/home/faqs?show_on_home=true`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};

export const fetchVideoSectionHome = async () => {
  console.log('fetchVideoSectionHome')
  try {
    const response = await fetch(`${BASE_URL}/api/home/video`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};

export const fetchTechnologySectionHome = async () => {
  console.log('fetchTechnologySectionHome')
  try {
    const response = await fetch(`${BASE_URL}/api/home/technologies-section`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};

export const fetchBlogPageBanner = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/page-blog`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};

export const fetchBlogPostsListing = async (page = 1, limit = 9, is_active = true, is_featured = true, search = '') => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      is_active: is_active.toString(),
      is_featured: is_featured.toString(),
      search: search.toString()
    });

    const response = await fetch(`${BASE_URL}/api/paginate/posts?${params}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data


  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
};

export const fetchAllBlogPost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/posts`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};
export const fetchBlogPostBySlug = async (slug) => {
  try {
    const response = await fetch(`${BASE_URL}/api/posts/slug/${slug}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data


  } catch (error) {
    console.error('Error fetching home banners:', error);
    return null;
  }
};

/**
 * Transforms a URL by removing the "https:" prefix from the start
 * @param {string} url - The URL to transform (e.g., "https:/services/website-development-dallas")
 * @returns {string} The transformed URL without "https:" prefix (e.g., "/services/website-development-dallas")
 */
export const transformButtonUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return url;
  }

  // Remove "https:" from the start of the URL
  return url.replace(/^https:/, '');
};
