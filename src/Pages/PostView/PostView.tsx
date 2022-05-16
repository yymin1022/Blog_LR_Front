
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import * as API from "../../Common/Utils/API";
import MDRenderer from "../../Common/Utils/MDRender";
import Utterances from "../../Common/Components/Utterances";

const PostView = () => {
    const {postID} = useParams<{postID : string}>();
    const {postType} = useParams<{postType : string}>();

    const [postContent, setContent] = useState<string>("");
    const [postDate, setDate] = useState<string>("");
    const [postTag, setTag] = useState<Array<string>>([]);
    const [postTitle, setTitle] = useState<string>("");
    const [postURL, setURL] = useState<string>("");

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
                <ReactMarkdown
                    children={postContent}
                    components={MDRenderer(postURL as string, postType as string)}
                    rehypePlugins={[RehypeRaw]}
                    remarkPlugins={[RemarkGFM]} />
            </PostContentContainer>

            <PostTagContainer>
                {postTag.map(item => {
                    return(
                        <p>{`#${item}`}</p>
                    )
                })}
            </PostTagContainer>

            <PostCommentContainer>
                <Utterances />
            </PostCommentContainer>

            <PostFooter>

            </PostFooter>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    width: 100%;

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PostCommentContainer = styled.div`
    width: 100%;
`;

const PostContentContainer = styled.div`
    width: 800px;

    font-family: "NanumSquare";
    line-height: 25px;
    text-align: center;

    @media screen and (max-width: 1400px){
        width: 100%;
    }
`;

const PostDataContainer = styled.div``;

const PostDataSeperator = styled.hr`
    width: 800px;

    margin-bottom: 30px;
    margin-top:30px;

    @media screen and (max-width: 1400px){
        width: 100%;
    }
`;

const PostDataAuthorDateContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    p{
        margin: 5px;
    }
`;

const PostDataTitleContainer = styled.div``;

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