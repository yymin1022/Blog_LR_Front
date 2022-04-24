import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postListData, setPostListData] = useState<any>({});

    useEffect(() => {
        setPostListData(API.getPostList(postType as string));
        console.log(postListData);
    }, []);

    return (
        <div>
            PostList
        </div>
    );
};

export default PostList;