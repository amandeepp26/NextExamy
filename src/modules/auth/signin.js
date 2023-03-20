import apiClient from '../../utils/apiClient';
import {setAuthData} from './session';
import Toast from 'react-native-toast-message';
import {validateEmail, validatePhoneNumber} from '../../utils/validate';

const ERROR = 'auth/signin/ERROR';
const CLEAR_STATE = 'auth/signin/CLEAR_STATE';
const SET_PHONE_NUMBER = 'auth/signin/SET_PHONE_NUMBER';
const SET_EMAIL = 'auth/signin/SET_EMAIL';
const SET_NAME = 'auth/signin/SET_NAME';
const SET_PASSWORD = 'auth/signin/SET_PASSWORD';
const ENTER_OTP = 'auth/signin/ENTER_OTP';
const SKIP = 'auth/signin/SKIP';

const LOGIN_START = 'auth/signin/LOGIN_START';
const LOGIN_SUCCESS = 'auth/signin/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/signin/LOGIN_FAIL';
const LOADING_START = 'auth/signin/LOADING_START';
const LOADING_STOP = 'auth/signin/LOADING_STOP';

const initialState = {
  loggingIn: false,
  skip: true,
  error: {},
  errorMessage: '',
  phone_number: '',
  name: '',
  email: '',
  password: '',
  otp: '',
  profile_pic: '',
  loading: false,
};

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const startLogin = () => ({
  type: LOGIN_START,
});

export const displayError = (title, message) => ({
  type: ERROR,
  title,
  message,
});

export const skipNow = skip => ({
  type: SKIP,
  skip,
});

export const setPhoneNumber = phone_number => {
  return {
    type: SET_PHONE_NUMBER,
    phone_number,
  };
};

export const setName = name => {
  return {
    type: SET_NAME,
    name,
  };
};

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    email,
  };
};

export const setPassword = password => {
  return {
    type: SET_PASSWORD,
    password,
  };
};

export const setOTP = otp => {
  return {
    type: ENTER_OTP,
    otp,
  };
};

export const requestOtp = callback => async (dispatch, getState) => {
  const state = getState();
  const {phone_number} = state.signin;
  console.warn('cll', callback);
  try {
    dispatch({
      type: LOADING_START,
    });
    const response = await apiClient.post(apiClient.Urls.login, {
      mobile: phone_number,
    });

    console.log('Request OTP---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      Toast.show({
        text1: response.message || 'OTP Sent',
        type: 'success',
      });
      dispatch({
        type: LOADING_STOP,
      });
    }  else {
      if (response.error_object.mobile) {
        Toast.show({
          text1: response.error_object.mobile || response || 'Something went wrong!',
          type: 'error',
        });
      }
      dispatch({
        type: LOADING_STOP,
      });
      dispatch({
        type: ERROR,
        errorMessage: response.message,
      });
    }
  } catch (e) {
    Toast.show({
      text1: e.message || e || 'Something went wrong!',
      type: 'error',
    });
    dispatch({
      type: ERROR,
      errorMessage: e.message,
    });
  }
};


export const resendOtp = callback => async (dispatch, getState) => {
  const state = getState();
  const {phone_number} = state.signin;
  console.warn('cll', callback);
  try {
    const response = await apiClient.post(apiClient.Urls.login, {
      mobile: phone_number,
    });

    console.log('Request OTP---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      Toast.show({
        text1: response.message || 'OTP Sent',
        type: 'success',
      });
      dispatch({
        type: LOADING_STOP,
      });
    } else {
      if (response.error_object.mobile) {
        Toast.show({
          text1: response.error_object.mobile || response || 'Something went wrong!',
          type: 'error',
        });
      }
      dispatch({
        type: LOADING_STOP,
      });
      dispatch({
        type: ERROR,
        errorMessage: response.message,
      });
    }
  } catch (e) {
    Toast.show({
      text1: e.message || e || 'Something went wrong!',
      type: 'error',
    });
    dispatch({
      type: ERROR,
      errorMessage: e.message,
    });
  }
};

export const validateOtp = () => async (dispatch, getState) => {
  const state = getState();
  const {otp, phone_number} = state.signin;
  if (otp == '') {
    Toast.show({text1: `Please enter verification code`, type: 'error'});
    return;
  }
  try {
    dispatch({
      type: LOGIN_START,
    });
    const response = await apiClient.post(apiClient.Urls.verifyOtp, {
      mobile: phone_number,
      otp: otp,
    });

    console.log('Log in---------->', response);

    if (response.success) {
      dispatch(setAuthData(response.profile.authToken, response.profile));
      Toast.show({text1: response.message || 'Login Success', type: 'success'});
      dispatch(skipNow(false));
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      Toast.show({
        text1: response.message || 'Something went wrong!',
        type: 'error',
      });
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(displayError('', response.message || 'Something went wrong!'));
    }
  } catch (e) {
    Toast.show({
      text1: e.message || e || 'Something went wrong!',
      type: 'error',
    });
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(displayError('', e.message || e || 'Something went wrong!'));
  }
};

export const requestSignupOtp = callback => async (dispatch, getState) => {
  const state = getState();
  const {phone_number, name, email} = state.signin;
  console.warn('cll', callback);
  try {
    dispatch({
      type: LOADING_START,
    });
    const response = await apiClient.post(apiClient.Urls.signup, {
      mobile: phone_number,
      name: name,
      email: email,
    });

    console.log('Request OTP---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      Toast.show({
        text1: response.message || 'OTP Sent',
        type: 'success',
      });
      dispatch({
        type: LOADING_STOP,
      });
    } else {
      if (response.error_object.mobile) {
        Toast.show({
          text1: response.errors || response || 'Something went wrong!',
          type: 'error',
        });
      }
      if (response.error_object.email) {
        Toast.show({
          text1: response.errors || response || 'Something went wrong!',
          type: 'error',
        });
      }
      if (response.error_object.name) {
        Toast.show({
          text1: response.errors || response || 'Something went wrong!',
          type: 'error',
        });
      }
      dispatch({
        type: LOADING_STOP,
      });
      dispatch({
        type: ERROR,
        errorMessage: response.message,
      });
    }
  } catch (e) {
    Toast.show({
      text1: e.message || e || 'Something went wrong!',
      type: 'error',
    });
    dispatch({
      type: ERROR,
      errorMessage: e.message,
    });
  }
};

export const resendSignupOtp = callback => async (dispatch, getState) => {
  const state = getState();
  const {phone_number, name, email} = state.signin;
  console.warn('cll', callback);
  try {
    const response = await apiClient.post(apiClient.Urls.signup, {
      mobile: phone_number,
      name: name,
      email: email,
    });

    console.log('Request OTP---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      Toast.show({
        text1: response.message || 'OTP Sent',
        type: 'success',
      });
      dispatch({
        type: LOADING_STOP,
      });
    } else {
      if (response.error_object.mobile) {
        Toast.show({
          text1: response.errors || response || 'Something went wrong!',
          type: 'error',
        });
      }
      if (response.error_object.email) {
        Toast.show({
          text1: response.errors || response || 'Something went wrong!',
          type: 'error',
        });
      }
      if (response.error_object.name) {
        Toast.show({
          text1: response.errors || response || 'Something went wrong!',
          type: 'error',
        });
      }
      dispatch({
        type: LOADING_STOP,
      });
      dispatch({
        type: ERROR,
        errorMessage: response.message,
      });
    }
  } catch (e) {
    Toast.show({
      text1: e.message || e || 'Something went wrong!',
      type: 'error',
    });
    dispatch({
      type: ERROR,
      errorMessage: e.message,
    });
  }
};

export const validateSignupOtp = () => async (dispatch, getState) => {
  const state = getState();
  const {otp, phone_number, email, name} = state.signin;
  if (otp == '') {
    Toast.show({text1: `Please enter verification code`, type: 'error'});
    return;
  }
  try {
    dispatch({
      type: LOGIN_START,
    });
    const response = await apiClient.post(apiClient.Urls.verifySignupOtp, {
      mobile: phone_number,
      otp: otp,
      name: name,
      email: email,
    });

    console.log('OTP Verification---------->', response);

    if (response.success) {
      dispatch(setAuthData(response.profile.authToken, response.profile));
      Toast.show({text1: response.message || 'Login Success', type: 'success'});
      dispatch(skipNow(false));
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      Toast.show({
        text1: response.message || 'Something went wrong!',
        type: 'error',
      });
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(displayError('', response.message || 'Something went wrong!'));
    }
  } catch (e) {
    Toast.show({
      text1: e.message || e || 'Something went wrong!',
      type: 'error',
    });
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(displayError('', e.message || e || 'Something went wrong!'));
  }
};

export default signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        error: {
          title: action.title,
          message: action.message,
        },
        loggingIn: false,
        loading: false,
      };
    }
    case CLEAR_STATE: {
      return {
        ...initialState,
      };
    }
    case LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOADING_STOP: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true,
        loading: true,
        errorMessage: '',
        error: {},
      };
    }
    case ENTER_OTP: {
      return {
        ...state,
        otp: action.otp,
      };
    }
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        phone_number: action.phone_number,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SKIP: {
      return {
        ...state,
        skip: action.skip,
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        errorMessage: '',
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: true,
        loading: false,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        loggingIn: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};
