import axios from 'axios';

const videoRequest = axios.create({
    baseURL: process.env.REACT_APP_LIST_VIDEO_URL,
});

export const get = async (path, options = {}) => {
    const response = await videoRequest.get(path, options);
    return response.data;
};

export default videoRequest;
