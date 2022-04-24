import axios from "axios";

const API_URL_BASE : string = process.env.REACT_APP_API_URL as string;

const apiRequest = (apiURL : string, apiReqData : object) => {
    let apiResult : any = sendRequest(apiURL, apiReqData);
    console.log(apiResult);
    
    let apiResultCode = apiResult["RESULT_CODE"];
    let apiResultData = apiResult["RESULT_DATA"];
    let apiResultMsg = apiResult["RESULT_MSG"];

    if(apiResultCode != 200){
        console.log(apiResult);
        console.log(apiResultMsg);
    }

    return(apiResultData);
};

const sendRequest = (url : string, data : object) => {
    axios.post(url, data)
    .then((response) => {
        console.log(response);
        return response.data;
    })
    .catch((error) => {
        let resultData = {
            RESULT_CODE: 100,
            RESULT_MSG: error as string
        };

        return resultData;
    });
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

    let apiResult : any = apiRequest(apiURL, apiReqData);
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