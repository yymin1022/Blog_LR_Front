import axios from "axios";

const API_URL_BASE : string = process.env.REACT_APP_API_URL as string;

const apiRequest = (apiURL : string, apiReqData : object) => {
    let apiResult : any = sendRequest(apiURL, apiReqData);
    let apiResultCode : number = apiResult["RESULT_CODE"] as number;
    let apiResultData : object = apiResult["RESULT_DATA"] as object;
    let apiResultMsg : string = apiResult["RESULT_MSG"] as string;

    if(apiResultCode != 200){
        console.log(apiResult);
        console.log(apiResultMsg);
    }

    return(apiResultData);
};

const sendRequest = (url : string, data : object) => {
    let resultData : object = {};

    axios.post(url, data)
    .then((response) => {
        console.log(response);
        resultData = response.data;
    })
    .catch((error) => {
        resultData = {
            RESULT_CODE: 100,
            RESULT_MSG: error as string
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

    let apiResult : any = apiRequest(apiURL, apiReqData);
    return apiResult["ImageData"];
};

export const getPostList = (postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostList`;
    let apiReqData : object = {
        postType: postType
    };

    console.log(apiURL);
    console.log(apiReqData);

    let apiResult : object = apiRequest(apiURL, apiReqData);
    return apiResult;
};