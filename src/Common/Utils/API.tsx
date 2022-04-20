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
            RESULT_CODE: 100,
            RESULT_MSG: error
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
    let API_URL : string = `${API_URL_BASE}/getPostList`;
    let API_DATA : object = {
        postType: postType
    };

    let API_RESULT : object = API_REQUEST(API_URL, API_DATA);
    if(API_RESULT["RESULT_CODE"] == 200){
        return(API_RESULT["RESULT_DATA"]);
    }else{
        console.log(API_RESULT["RESULT_MSG"]);
    }
};