import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";

const BaseLayout = () => {
    return (
        <BaseContainer>
            <PageContainer>
                <Outlet />
            </PageContainer>
            <MenuContainer>
                <Menu />
            </MenuContainer>
        </BaseContainer>
    );
};

const BaseContainer = styled.div`
    height: 100%;
    width: 100%;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 1400px){
        flex-direction: column;
    }
`;

const MenuContainer = styled.div`
    height: 100%;
    width: 350px;

    left: 0;
    top: 0;
    position: fixed;
    
    background-color: #164EAB;

    animation-name: MenuSlide;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;

    @keyframes MenuSlide{
    0%{
        width: 100%;
    }
    50%{
        width: 100%;
    }
    100%{
        width: 350px;
    }
}

    @media screen and (max-width: 1400px){
        height: 65px;
        width: 100%;

        animation-name: MenuSlideMobile;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;

        @keyframes MenuSlideMobile{
            0%{
                height: 100%;
            }
            50%{
                height: 100%;
            }
            100%{
                height: 65px;
            }
        }
    }
`;

const PageContainer = styled.div`
    height: 100%;
    width: 100%;

    margin-top: 150px;
    margin-left: 350px;

    @media screen and(max-width: 1400px){
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 200px;
    }
`;

export default BaseLayout;