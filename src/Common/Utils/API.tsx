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
    let apiReqData : object = {
        postType: postType
    };

    let apiResult : object = API_REQUEST(API_URL, apiReqData);
    let apiResultCode : number = apiResult["RESULT_CODE"];
    let apiResultData : object = apiResult["RESULT_DATA"];
    let apiResultMsg : string = apiResult["RESULT_MSG"];

    if(apiResultCode == 200){
        return(apiResultData);
    }else{
        console.log(apiResultMsg);
    }
};