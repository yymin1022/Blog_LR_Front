import React from "react";
import styled, { css } from "styled-components";

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorTitleContainer>

            </ErrorTitleContainer>
            <ErrorNavContainer>
                
            </ErrorNavContainer>
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

const ErrorNavContainer = styled.div`
    margin: 10px;

    @media screen and (max-width: 1400px){
        margin: 10px;
    }
`;

const ErrorTitleContainer = styled.div`
    margin: 10px;

    @media screen and (max-width: 1400px){
        margin: 10px;
    }
`;

export default Error;