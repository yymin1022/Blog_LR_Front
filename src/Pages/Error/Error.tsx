import React from "react";
import styled, { css } from "styled-components";

const Error = () => {
    return (
        <ErrorContainer>
            
        </ErrorContainer>
    );
};

const ErrorContainer = styled.div`
    width: 100%;

    margin-left: 100px;

    @media screen and (max-width: 1400px){
        margin: 0px;
    }
`;

export default Error;