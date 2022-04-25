import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import * as API from "../../Common/Utils/API";

const PostListItem = (props : any) => {
    const [postDate, setDate] = useState<string>("");
    const [postIsPinned, setIsPinned] = useState<string>("");
    const [postLink, setLink] = useState<string>("");
    const [postTag, setTag] = useState<Array<string>>([]);
    const [postThumb, setThumb] = useState<string>("");
    const [postTitle, setTitle] = useState<string>("");
    const [postType, setType] = useState<string>("");
    const [postURL, setURL] = useState<string>("");

    useEffect(() => {
        setDate(props.postDate);
        setIsPinned(props.postIsPinned);
        setLink(`/postview/${props.postType}/${props.postID}`);
        setTag(props.postTag);
        setTitle(props.postTitle);
        setType(props.postType);
        setURL(props.postURL);

        API.getPostImage(props.postURL as string, props.postType as string, "thumb.png").then((apiResult : any) => {
            setThumb(`data:image/;base64,${apiResult["ImageData"]}`);
        });
    }, []);

    return(
        <Link to={postLink}>
            <PostItemContainer>
                <PostItemImageContainer>
                    <PostItemImage src={postThumb}/>
                </PostItemImageContainer>

                <PostItemTextContainer>
                    <PostItemTextTitle>{postTitle}</PostItemTextTitle>
                    <PostItemTextDate>{postDate}</PostItemTextDate>
                    <PostItemTextTag>{`#${postTag[0]}`}</PostItemTextTag>
                </PostItemTextContainer>
            </PostItemContainer>
        </Link>
    )
}

const PostItemContainer = styled.div`
    height: 450px;
    width: 300px;

    margin: 0px 0px 30px 0px;

    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;

    &:hover{
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    @media screen and (max-width: 1400px){
        height: 150px;
        width: 350px;
    
        margin: 0px 0px 30px 0px;
    
        display: flex;
        flex-direction: row;
    
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        transition: box-shadow 0.3s ease-in-out;
    }
`;

const PostItemImage = styled.img`
    height: 100%;
    width: 100%;
`;

const PostItemImageContainer = styled.div`
    height: 300px;
    width: 300px;

    @media screen and (max-width: 1400px){
        height: 150px;
        width: 150px;
    }
`;

const PostItemTextDate = styled.p`
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;

    color: #606060;
    text-align: left;

    @media screen and (max-width: 1400px){
        font-size: 15px;
    }
`;

const PostItemTextTag = styled.p`
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;

    color: #808080;
    text-align: left;

    @media screen and (max-width: 1400px){
        font-size: 15px;
    }
`;

const PostItemTextTitle = styled.p`
    height: 45px;

    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;

    color: #164EAB;
    font-size: 20px;
    font-weight: 900;
    text-align: left;

    @media screen and (max-width: 1400px){
        font-size: 17px;
    }
`;

const PostItemTextContainer = styled.div`
    height: 150px;
    width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: left;
    
    p{
        margin-left: 10px;
        margin-right: 10px;
    
        text-align: left;
    }

    @media screen and (max-width: 1400px){
        height: 150px;
        width: 200px;
    
        padding-left: 10px;
        padding-right: 10px;
    
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
`;

export default PostListItem;