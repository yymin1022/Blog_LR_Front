import React from "react";
import styled, { css } from "styled-components";

const Home = () => {
    return (
        <HomeContainer>
            <HomeTitleContainer>
                <HomeTitleText primary={false}>안녕하세요</HomeTitleText>
                <HomeTitleText primary={true}>대학생 1인 개발자</HomeTitleText>
                <HomeTitleText primary={false}>LR입니다</HomeTitleText>
            </HomeTitleContainer>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    margin-left: 100px;
`;

const HomeTitleContainer = styled.div`
    margin: 10px;
`;

const HomeTitleText = styled.p<{primary : boolean}>`
    font-size: 80px;
    margin: 0px;

    ${(props) =>
        props.primary &&
        css`
            color: #164EAB;
            font-weight: bold;
        `
    }
`;

export default Home;