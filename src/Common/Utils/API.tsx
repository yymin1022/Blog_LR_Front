import axios from "axios";

const API_URL_BASE : string = process.env.apiURL as string;

const apiRequest = (apiURL : string, apiReqData : object) => {
    let apiResult : object = sendRequest(apiURL, apiReqData);
    let apiResultCode : number = apiResult["RESULT_CODE"];
    let apiResultData : object = apiResult["RESULT_DATA"];
    let apiResultMsg : string = apiResult["RESULT_MSG"];

    if(apiResultCode == 200){
        return(apiResultData);
    }else{
        console.log(apiResultMsg);
    }
};

const sendRequest = (url : string, data : object) => {
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

export const getPostData = (postID : string, postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostData`;
    let apiReqData : object = {
        postID: postID,
        postType: postType
    };

    let apiResult : object = apiRequest(apiURL, apiReqData);
    return apiResult;
};

export const getPostImage = (postID : string, postType : string, srcID : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostImage`;
    let apiReqData : object = {
        postID: postID,
        postType: postType,
        srcID: srcID
    };

    let apiResult : object = apiRequest(apiURL, apiReqData);
    return apiResult["ImageData"];
};

export const getPostList = (postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostList`;
    let apiReqData : object = {
        postType: postType
    };

    let apiResult : object = apiRequest(apiURL, apiReqData);
    return apiResult;
};