export const baseUrl = 'https://app.ankitbangwaldigitalmarketing.in/';
export const imgUrl = 'https://app.ankitbangwaldigitalmarketing.in/images/assessments/';

const apiClient = {
  Urls: {
    imgUrl,
    init: 'api/device/add',
    login: 'api/login',
    verifyOtp: 'api/otpverify',
    signup:'api/register',
    categories:'api/category',
    subjects:'api/subjectslist',
    topicList:'api/topiclist',
    startTest:'api/starttest',
    checkAnswer:'api/checkanswer',
    submitTest:'api/submittest',
    submittedMockTests:'api/assessment-submissions',
    mocktestDetail:"api/assessment-details",
    subjectWiseClass:'api/subjecttopics',
    subjectWiseTopics:'api/topiclist',
    topicWiseClass:'api/topiclass',
    getProfile:'api/my-profile',
    updateProfile:'api/update-profile',
    
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
    contactedProperty:"api/web/property/contacted",
    viewedProperty:"api/web/property/history",
    searchQuery:"api/web/localities",
    blogDetails:'api/web/blog/post/'
  },
  make: function (url, method, params) {
    console.log("apiclient", baseUrl + url, params);
  
    let formData = new FormData();
  
    if (params) {
      for (let key in params) {
        formData.append(key, params[key]);
      }
    }
  
    let headers = {};
  
    if (params?.authToken) {
      headers['Authorization'] = `Bearer ${params?.authToken}`;
    }
  
    return fetch(baseUrl + url, {
      method,
      headers,
      body: formData,
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
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
