/**
 * axios instance is a custome configuratio for the axios library.
 * It is created by calling the the create method on the axios object.
 * with the axios instance you can create a baseURL, you can add headers that can be
 *  applied on every request.
 *
 * The axios configuration object.
 *  url=> string with which axios is gonn make the request to
 *  method => The request method
 *  baseURL => is prepended on every request.
 *  headers:{} it is an object that has extra headers like Contnt-Type, Authorization etc.
 *  data => An object that contains the data that is gonna be sent to the server.
 *  withCredentials: boolean. Indicates whether or not Cross-Site-Access-Control
 *  onUploadProgress: a funtion that enables us to monitor the progress of an upload
 *  onDownloadProgress: a funtion that enables us to monitor the progress of an dowload
 *
 * global cofigurations
 */

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1"; // u can't use another api with axios.
axios.defaults.withCredentials = true;
axios.defaults.headers.common.Authorization = "Bearer token";

// axios instance.
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});
client.defaults.headers.common.Authorization = "Bearer token";
client.defaults.withCredentials = true;

export default client;
