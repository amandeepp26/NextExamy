export const baseUrl = 'https://seller.estatedekho.com/';
export const imgUrl = 'https://seller.estatedekho.com/';

const apiClient = {
  Urls: {
    imgUrl,
    init: 'api/device/add',
    login: 'api/web/sendOtp',
    verifyOtp: 'api/web/verifyOtp',
    signup:'api/web/signup/sendOtp',
    verifySignupOtp: 'api/web/signup/verifyOtp',
    getProfile:"api/web/profile",
    propertyByType:'api/web/home/explore',
    getCities:"api/list/cities",
    getHomeContent:"api/web/home/content",
    getNewsList:"api/web/blog/posts",
    blogDetails:"api/web/blog/post/", //need to do + developer list and details
    getPropertyDetail:"api/web/property/details",
    search:"api/web/home/search",
    favouriteProperty:"api/web/properties/favourite",
    addToFavourite:"api/web/property/favourite",
    propertyContact:"api/web/contact/property",
    developerContact:"api/web/contact/developer",
    developerList:"api/list/developers",
    developerDetail:"api/web/developer/",
    updateProfile:"api/web/profile/update",
    contactedProperty:"api/web/property/contacted",
    viewedProperty:"api/web/property/history",
    searchQuery:"api/web/localities",
    blogDetails:'api/web/blog/post/'
  },

  make: function (url, method, params) {
    console.log("apiclient", baseUrl + url, params);
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    if (params?.authToken) {
      headers['Authorization'] = `Bearer ${params?.authToken}`
    }

    return fetch(baseUrl + url, {
      method,
      headers,
      body: JSON.stringify(params),
    }).then(response => response.json());

  },

  post: function (url, params) {
    return this.make(url, 'POST', params);
  },

  get: function (url, params) {
    console.log("apiclient", baseUrl + url, params);
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    if (params.authToken) {
      headers['Authorization'] = `Bearer ${params.authToken}`
    }
    return fetch(baseUrl + url, {
      method: 'GET',
      headers,
    }).then(response => response.json())
      .catch(error => {
        console.log('api client-------->', error);
        return {
          success: false,
          message: error?.message || error || 'Something went wrong!',
        };
      })
  },
};

export default apiClient;
