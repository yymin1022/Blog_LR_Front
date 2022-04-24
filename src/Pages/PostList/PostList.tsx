import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postListData, setPostListData] = useState<any>({} as object);

    useEffect(() => {
        API.getPostList(postType as string).then((postList : any) => {
            console.log(postList);
            setPostListData(postList as object);
        });
    }, []);

    return (
        <div>
            {
                postListData["postList"].map((item : any) => {
                    return(
                        <p>item.postTitle</p>
                    )
                })
            }
        </div>
    );
};

export default PostList;