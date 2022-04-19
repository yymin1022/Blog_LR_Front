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

            <MenuDivider />
            
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

const MenuDivider = styled.hr`
    background-color: #FFFFFF;
    border: 0;
    height: 0.5px;
    width: 310px;

    margin-left: 20px;
    margin-right: 20px;

    animation-name: MenuDivider;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;

    @keyframes MenuDivider{
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
            snsURL = "https://www.facebook.com/profile.php?id=100007285635473";
            break;
        case "github":
            snsIcon = faGithub;
            snsURL = "https://github.com/yymin1022";
            break;
        case "googleplay":
            snsIcon = faGooglePlay;
            snsURL = "https://play.google.com/store/apps/developer?id=Dev.+LR";
            break;
        case "instagram":
            snsIcon = faInstagram;
            snsURL = "https://instagram.com/useful_min";
            break;
    }

    return (
        <>
            <a href={snsURL} target="_sub">
                <FontAwesomeIcon icon={snsIcon} color="white" size="lg" />
            </a>
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
            <MenuTitleTextContainer>
                <p>LR의</p>
                <p>IT블로그</p>
            </MenuTitleTextContainer>
            
        </Link>
    );
};

const MenuTitleTextContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1400px){
        display: flex;
        flex-direction: row;
    }
`;

export default Menu;