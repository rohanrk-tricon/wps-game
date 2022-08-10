import axios from 'axios';

// For GET requests
axios.interceptors.request.use(
  req => {
    console.log('GET req success');
    // Add configurations here
    return req;
  },
  err => {
    console.log('GET req error');
    return Promise.reject(err);
  },
);

// For POST requests
axios.interceptors.response.use(
  res => {
    // Add configurations here
    console.log('POST req success');
    if (res.status === 201) {
      console.log('Posted Successfully');
    }
    return res;
  },
  err => {
    console.log('POST req error');
    return Promise.reject(err);
  },
);
