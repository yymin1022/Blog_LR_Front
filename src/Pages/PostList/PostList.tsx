import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postListData, setPostListData] = useState<any>({});

    useEffect(() => {
        API.getPostList(postType as string).then((postList : any) => {
            console.log(postList);
            setPostListData(postList);
        });
    }, []);

    return (
        <div>
            {
                postListData.map((item : any) => {
                    return(item.postTitle);
                })
            }
        </div>
    );
};

export default PostList;