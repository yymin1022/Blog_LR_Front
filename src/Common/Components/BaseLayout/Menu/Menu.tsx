import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
    return (
        <MenuContent>
            <MenuTitle>
                <MenuTitleText />
            </MenuTitle>
            
            <MenuNav>
                <MenuNavItem snsType="facebook" />
                <MenuNavItem snsType="github" />
                <MenuNavItem snsType="googleplay" />
                <MenuNavItem snsType="instagram" />
            </MenuNav>
        </MenuContent>
    );
};

const MenuContent = styled.div`
    width: 100%;
    
    margin-bottom: 30px;

    bottom: 0;
    position: absolute;

    @media screen and (max-width: 1400px){
        height: 100%;
        width: 100%;

        margin-bottom: 0px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const MenuNav = styled.div`
    width: 310px;

    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    animation-name: MenuNav;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;

    @keyframes MenuNav{
        0% {
            display: none;
            opacity: 0;
        }
        50% {
            display: block;
            opacity: 0;
        }
        100% {
            display: block;
            opacity: 1;
        }
    }

    @media screen and (max-width: 1400px){
        display: none;
    }
`;

const MenuNavItem = (props: any) => {
    let snsIcon: any;
    let snsType: string = props.snsType;
    let snsURL: string = "";

    switch(snsType){
        case "facebook":
            snsIcon = faFacebook;
            snsURL = process.env.SNS_FB as string;
            break;
        case "github":
            snsIcon = faGithub;
            snsURL = process.env.SNS_GH as string;
            break;
        case "googleplay":
            snsIcon = faGooglePlay;
            snsURL = process.env.SNS_GP as string;
            break;
        case "instagram":
            snsIcon = faInstagram;
            snsURL = process.env.SNS_IN as string;
            break;
    }

    return (
        <>
            <Link to={{
                pathname: snsURL
            }} target="_sub">
                <FontAwesomeIcon icon={snsIcon} color="white" size="lg" />
            </Link>
        </>
    );
};

const MenuTitle = styled.div`
    width: 100%;

    margin-bottom: 20px;
    margin-left: 35px;
    margin-right: 35px;

    animation-name: MenuTitleText;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;

    p{
        margin: 0px;

        color: #FFFFFF; 
        font-size: 50px;

        animation-name: MenuTitleTextScale;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
    }

    @keyframes MenuTitleText{
        0% {
            width: 100%;
        }
        50% {
            width: 100%;
        }
        100% {
            width: 320px;
        }
    }

    @keyframes MenuTitleTextScale{
        0% {
            font-size: 80px;
        }
        50% {
            font-size: 80px;
        }
        100% {
            font-size: 50px;
        }
    }

    @media screen and (max-width: 1400px){
        height: 100%;
        width: 100%;

        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;

        align-items: center;
        display: flex;
        flex-direction: row;

        p{
            margin: 0px;
        
            color: #FFFFFF; 
            font-size: 30px;
        
            animation-name: MenuTitleTextScaleMobile;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
        }

        @keyframes MenuTitleTextScaleMobile{
            0% {
                font-size: 50px;
            }
            50% {
                font-size: 50px;
            }
            100% {
                font-size: 30px;
            }
        }
    }
`;

const MenuTitleText = () => {
    return (
        <Link to="/">
            <p>LR의</p>
            <p>IT블로그</p>
        </Link>
    );
};

export default Menu;