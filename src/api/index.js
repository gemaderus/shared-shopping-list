// import axios from 'axios';
// import endpoints from './endpoints';

// const baseURL = process.env.REACT_APP_API_BASE;

// const api = {
//   endpoints,
//   get: function(options) {
//     console.log(options)
//     const params = {
//       ...options,
//       url: this.decodeURL(options.url)
//     };
//     return new Promise((resolve, reject) => {
//       axios
//       .get(params.url, params.body)
//       .then(res => resolve(res))
//       .catch(e => reject(e))
//     })
//   },

//   post: function(options) {
//     const params = { 
//       ...options,
//       url: this.decodeURL(options.url)
//     }

//     return new Promise((resolve, reject) => {
//       axios
//         .post(params.url, params.body)
//         .then(res => resolve(res))
//         .catch(e => reject(e))
//     })
//   },
//   patch: function(options) {
//     const params = {
//       ...options,
//       url: this.decodeURL(options.url)
//     }

//     return new Promise((resolve, reject) => {
//       axios
//         .patch(params.url, params.body)
//         .then(res => resolve(res))
//         .catch(e => reject(e))
//     })
//   },
//   delete: function(options) {
//     const params = {
//       ...options,
//       url: this.decodeURL(options.url)
//     }
//     return new Promise((resolve, reject) => {
//     axios
//       .delete(params.url, params.body)
//       .then(res => resolve(res))
//       .catch(e => reject(e))
//     })
//   },
//   decodeURL(url) {
//     let endpoint = endpoints[url[0]];
//     if (url.length > 1) {
//       const params = url.filter((param, index) => index !== 0);
//       var format = require('string-template');
//       endpoint = format(endpoint, params);
//     }
//     return baseURL + endpoint;
//   }
// }

// export default api;