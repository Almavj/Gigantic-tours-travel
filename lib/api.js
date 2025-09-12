const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const api = {
  // Destinations
  getDestinations: async () => {
    const response = await fetch(`${API_BASE_URL}/destinations`);
    return handleResponse(response);
  },

  getDestinationBySlug: async (slug) => {
    const response = await fetch(`${API_BASE_URL}/destinations/${slug}`);
    return handleResponse(response);
  },

  // Tours
  getTours: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE_URL}/tours?${query}`);
    return handleResponse(response);
  },

  // Bookings
  createBooking: async (bookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    return handleResponse(response);
  },

  // Authentication
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  // User
  getUserProfile: async (token) => {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};

// Helper function for SSR/SSG data fetching
export const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  return handleResponse(response);
};