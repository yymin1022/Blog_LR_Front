import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import * as API from "../../Common/Utils/API";

const PostView = () => {
    const {postID} = useParams<{postID : string}>();
    const {postType} = useParams<{postType : string}>();

    const [postContent, setContent] = useState<string>();
    const [postDate, setDate] = useState<string>();
    const [postTag, setTag] = useState<Array<string>>();
    const [postTitle, setTitle] = useState<string>();
    const [postURL, setURL] = useState<string>();

    useEffect(() => {
        API.getPostData(postID as string, postType as string).then((apiResult : any) => {
            setContent(apiResult["PostContent"]);
            setDate(apiResult["PostDate"]);
            setTag(apiResult["PostTag"]);
            setTitle(apiResult["PostTitle"]);
            setURL(apiResult["PostURL"]);
        });
    }, []);

    return (
        <PostContainer>
            <PostDataContainer>
                <PostDataTitleContainer>
                    <h2>{postTitle}</h2>
                </PostDataTitleContainer>

                <PostDataAuthorDateContainer>
                    <p>written by LR</p>
                    <p>|</p>
                    <p>{postDate}</p>
                </PostDataAuthorDateContainer>
            </PostDataContainer>

            <PostDataSeperator />

            <PostContentContainer>
                PostContent
            </PostContentContainer>

            <PostTagContainer>
                PostTag
            </PostTagContainer>

            <PostCommentContainer>
                PostComment
            </PostCommentContainer>

            <PostFooter>

            </PostFooter>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`;

const PostCommentContainer = styled.div`
    
`;

const PostContentContainer = styled.div`
    width: 800px;
`;

const PostDataContainer = styled.div`

`;

const PostDataSeperator = styled.hr`
    width: 800px;

    margin-bottom: 30px;
    margin-top:30px;
`;

const PostDataAuthorDateContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    p{
        margin: 5px;
    }
`;

const PostDataTitleContainer = styled.div`

`;

const PostFooter = styled.div`
    height: 150px;
    width: 100%;

    align-items: center;
    display: flex;
    justify-content: center;
`;

const PostTagContainer = styled.div`
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    p{
        color: #777777;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export default PostView;