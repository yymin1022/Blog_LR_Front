import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postListData, setPostListData] = useState<any>({});

    let postList = API.getPostList(postType as string);

    useEffect(() => {
        setPostListData(postList);
        console.log(postListData);
    }, [postList]);

    return (
        <div>
            PostList
        </div>
    );
};

export default PostList;