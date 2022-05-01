import React, { useState } from "react"; 
import styled from "styled-components";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import * as API from "../../Common/Utils/API";

const MDRenderer = (postURL: string, postType: string) => {
    return {
        a: ({children, href, ...props} : {children? : any, href? : any}) =>{
            if(postType !== "about"){
                return(
                    <a target="_blank" {...props}>
                        <AContainer>
                            <p className="postLinkTitle">{children}</p>
                            <p className="postLinkURL">{href}</p>
                        </AContainer>
                    </a>
                )
            }else{
                return(
                    <A target="_blank" {...props}>{children}</A>
                )
            }
        },
        
        code: ({inline, className, children, ...props} : {children? : any, className? : any, inline? : any}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={darcula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        },

        img: ({src, width, ...props} : {src? : any, width? : any}) =>
            <ImageView src={src} postType={postType} postURL={postURL} width={width} {...props} />,

        strong: ({children, ...props} : {children? : any}) =>
            <Strong {...props}>{children}</Strong>,
        
        ul: ({children, ...props} : {children? : any}) =>
            <Ul {...props}>{children}</Ul>,
    }
}

export default MDRenderer;

const ImageView = ({src, postType, postURL, width, ...props} : {src : any, postType : any, postURL : any, width : any}) => {
    const [imgData, setImgData] = useState<string>("");

    API.getPostImage(postURL as string, postType as string, src as string).then((apiResult : any) => {
        setImgData(`data:image/;base64,${apiResult["ImageData"]}`);
    });

    return <img src={imgData} width={width} {...props} />;
}

const A = styled.a`
    color: #164EAB;
    font-weight: 900;
    text-decoration: none;
    transition: color .3s;
    &:hover {
        color: #0b2b5e;
    }
`

const AContainer = styled.div`
    height: 100px;
    width: 450px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border: 1px #EEEEEE solid;
    border-radius: 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);

    transition: box-shadow .3s;

    &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .postLinkTitle{
        color: #164EAB;
        font-size: 17px;
        font-weight: 900;
        margin: 0px;
        max-width: 90%;
        overflow: hidden;
        text-decoration: none;
        white-space: nowrap;
    }

    .postLinkURL{
        color: #777777;
        font-size: 15px;
        font-weight: 500;
        margin: 0px;
        max-width: 90%;
        overflow: hidden;
        text-decoration: none;
        white-space: nowrap;
    }

    @media screen and (max-width: 1400px){
        width: 100%;
    }
`

const Strong = styled.strong`
    background-color: #EEEEEE;
    color: #164EAB;
    font-weight: 500;
    padding: 4px;
`

const Ul = styled.ul`
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 500px;

    @media screen and (max-width: 1400px){
        width: auto;
    }
`