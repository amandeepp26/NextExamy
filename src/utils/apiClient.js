export const baseUrl = 'https://nextexamy.com/';
export const imgUrl = 'https://nextexamy.com/images/assessments/';

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
    selectCategory:'api/user-category',
    subscriptionPlanList:'api/planlist',
    paymentSuccess:'api/successpayment',
    paymentFailure:'api/failedpayment',
    
  },
  make: function (url, method, params) {
    console.log("apiclient", baseUrl + url, params);
  
    let formData = new FormData();
  
    if (params) {
      for (let key in params) {
        formData.append(key, params[key]);
      }
    }
    if(params?.profile){
      formData.append('profile', {
        uri: params?.profile,
        type: 'image/jpeg', // Adjust the MIME type according to your image file format
        name: 'image.jpg', // Provide a desired name for the file
      });
    }
  
    let headers = {
      'Accept': 'application/json',};
  
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
