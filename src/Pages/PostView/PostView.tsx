import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostView = () => {
    const {postID} = useParams<{postID : string}>();
    const {postType} = useParams<{postType : string}>();

    const [postContent, setContent] = useState<string>();
    const [postDate, setDate] = useState<string>();
    const [postTag, setTag] = useState<string>();
    const [postTitle, setTitle] = useState<string>();
    const [postURL, setURL] = useState<string>();

    useEffect(() => {
        console.log("postID : " + postID);
        console.log("postType : " + postType);

        API.getPostData(postID as string, postType as string).then((apiResult : any) => {
            setContent(apiResult["PostContent"]);
            setDate(apiResult["PostDate"]);
            setTag(apiResult["PostTag"]);
            setTitle(apiResult["PostTitle"]);
            setURL(apiResult["PostURL"]);
        });
    }, []);

    return (
        <div>
            <p>{postDate}</p>
            <p>{postTag}</p>
            <p>{postTitle}</p>
            <p>{postURL}</p>
            <p>{postContent}</p>
        </div>
    );
};

export default PostView;