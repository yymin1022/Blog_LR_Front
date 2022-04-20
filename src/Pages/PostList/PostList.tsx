import React from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const { postType } = useParams<{postType : string}>() as string;
    console.log(postType);
    
    const postListData = API.getPostList(postType);
    console.log(postListData);

    return (
        <div>
            PostList
        </div>
    );
};

export default PostList;