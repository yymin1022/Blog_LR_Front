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