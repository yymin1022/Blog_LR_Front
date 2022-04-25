import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostListItem = (props : any) => {
    const [postDate, setDate] = useState<string>("");
    const [postIsPinned, setIsPinned] = useState<string>("");
    const [postTag, setTag] = useState<string>("");
    const [postTitle, setTitle] = useState<string>("");
    const [postType, setType] = useState<string>("");
    const [postURL, setURL] = useState<string>("");

    useEffect(() => {
        setDate(props.postDate);
        setIsPinned(props.postIsPinned);
        setTag(props.postTag);
        setTitle(props.posttitle);
        setType(props.postType);
        setURL(`/postview/${postType}/${postURL}`);
    }, []);

    return(
        <p>{postTitle}</p>
    )
}

export default PostListItem;