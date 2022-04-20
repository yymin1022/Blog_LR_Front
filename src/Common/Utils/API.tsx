import axios from "axios";

const API_URL_BASE : string = process.env.API_URL;

const API_REQUEST = (url : string, data : object) => {
    let resultData : object = {};

    axios.post(url, data)
    .then((response) => {
        resultData = response.data;
    })
    .catch((error) => {
        resultData = {
            RESULT_MSG: error as string
        };
    });

    return resultData;
}

export const getPostData = () => {
    return {getPostData: true};
};

export const getPostImage = () => {
    return {getPostImage: true};
};

export const getPostList = (postType : string) => {
    return {getPostList: true};
};