import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <MenuContainer />
            <PageContainer>
                <Outlet />
            </PageContainer>
        </> 
    );
};

const MenuContainer = styled.div`

`;

const PageContainer = styled.div`
    
`;

export default BaseLayout;