import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";

const BaseLayout = () => {
    return (
        <>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </> 
    );
};

const BaseContainer = styled.div`
    height: 100%;
    width: 100%;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1400px){
        flex-direction: column;
    }
`;

const MenuContainer = styled.div`
    height: 100%;
    width: 350px;

    @media screen and (max-width: 1400px){
        height: 65px;
        width: 100%;
    }
`;

const PageContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export default BaseLayout;