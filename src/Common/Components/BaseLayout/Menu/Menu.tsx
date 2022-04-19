import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    
    background-color: #164EAB;

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

    @keyframes SideMenuNav{
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

const MenuNavItem = (props : any) => {
    let snsType: string = props.snsType;
    let snsURL : string = "";

    switch(snsType){
        case "facebook":
            snsURL = process.env.SNS_FB as string;
            break;
        case "github":
            snsURL = process.env.SNS_GH as string;
            break;
        case "googleplay":
            snsURL = process.env.SNS_GP as string;
            break;
        case "instagram":
            snsURL = process.env.SNS_IN as string;
            break;
    }

    return (
        <>
            <Link to={snsURL} target="_sub">

            </Link>
        </>
    );
};

const MenuTitle = styled.div`

`;

const MenuTitleText = () => {
    return (
        <>
            <p>LR의</p>
            <p>IT블로그</p>
        </>
    );
};

export default Menu;