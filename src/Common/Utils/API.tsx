import axios from "axios";

const API_URL_BASE : string = process.env.REACT_APP_API_URL as string;

const apiRequest = (apiURL : string, apiReqData : object) => {
    return new Promise((resolve) => {
        sendRequest(apiURL, apiReqData).then((apiResult : any) => {
            let apiResultCode = apiResult["RESULT_CODE"];
            let apiResultData = apiResult["RESULT_DATA"];
            let apiResultMsg = apiResult["RESULT_MSG"];

            if(apiResultCode != 200){
                console.log(apiResult);
                console.log(apiResultMsg);
            }

            resolve(apiResultData);
        });
    })
};

const sendRequest = (url : string, data : object) => {
    return new Promise((resolve) => {
        axios.post(url, data)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            resolve({
                RESULT_CODE: 100,
                RESULT_MSG: error as string
            });
        });
    });
}

export const getPostData = (postID : string, postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostData`;
    let apiReqData : object = {
        postID: postID,
        postType: postType
    };

    return apiRequest(apiURL, apiReqData);
};

export const getPostImage = (postID : string, postType : string, srcID : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostImage`;
    let apiReqData : object = {
        postID: postID,
        postType: postType,
        srcID: srcID
    };

    return apiRequest(apiURL, apiReqData);
};

export const getPostList = (postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostList`;
    let apiReqData : object = {
        postType: postType
    };

    return apiRequest(apiURL, apiReqData);
};