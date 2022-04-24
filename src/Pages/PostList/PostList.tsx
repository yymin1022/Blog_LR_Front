import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postCount, setPostCount] = useState<number>(0);
    const [postList, setPostList] = useState<Array<object>>([]);

    useEffect(() => {
        API.getPostList(postType as string).then((apiResult : any) => {
            console.log(apiResult);
            setPostCount(apiResult.postCount);
            setPostList(apiResult.postList);
        });
    }, []);

    return (
        <div>
            {
                postCount
            }
        </div>
    );
};

export default PostList;