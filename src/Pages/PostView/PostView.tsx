import React, { useEffect, useState } from "react";

const PostView = () => {
    const [postContent, setContent] = useState<string>();
    const [postDate, setDate] = useState<string>();
    const [postTag, setTag] = useState<string>();
    const [postTitle, setTitle] = useState<string>();
    const [postURL, setURL] = useState<string>();

    useEffect(() => {
        
    }, []);

    return (
        <div>
            PostView
        </div>
    );
};

export default PostView;