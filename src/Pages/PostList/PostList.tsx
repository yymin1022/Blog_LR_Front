import React from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    
    const postListData = API.getPostList(postType as string);

    return (
        <div>
            PostList
        </div>
    );
};

export default PostList;