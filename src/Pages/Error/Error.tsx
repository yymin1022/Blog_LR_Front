import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorTitleContainer>
                <ErrorTitleItem />
            </ErrorTitleContainer>
            <ErrorNavContainer>
                <ErrorNavItem />
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

    p{
        margin: 10px;

        color: black;
        font-size: 20px;
        font-weight: 700;
    }

    @media screen and (max-width: 1400px){
        margin: 10px;
    }
`;

const ErrorNavItem = () => {
    return(
        <Link to={"/"}>
            <p>Go Home</p>
        </Link>
    )
};

const ErrorTitleContainer = styled.div`
    margin: 10px;

    @media screen and (max-width: 1400px){
        margin: 10px;
    }
`;

const ErrorTitleItem = () => {
    return(
        <>
            <ErrorTitleText accent={true}>앗!</ErrorTitleText>
            <ErrorTitleText accent={false}>잘못된 접근입니다.</ErrorTitleText>
        </>
    )
};

const ErrorTitleText = styled.p<{accent : boolean}>`
    font-size: 60px;
    margin: 0px;

    ${(props) =>
        props.accent &&
        css`
            color: #164EAB;
            font-weight: bold;
        `
    }

    @media screen and (max-width: 1400px){
        font-size: 30px;
    }
`;

export default Error;