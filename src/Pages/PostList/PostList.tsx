import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postCount, setPostCount] = useState<number>(0);
    const [postList, setPostList] = useState<Array<object>>([]);

    useEffect(() => {
        API.getPostList(postType as string).then((apiResult : any) => {
            setPostCount(apiResult["PostCount"]);
            setPostList(apiResult["PostList"]);
        });
    }, []);

    return (
        <div>
            {
                postList.map((item : any) => {
                    return(
                        <p>{item["postTitle"]}</p>
                    )
                })
            }
        </div>
    );
};

export default PostList;