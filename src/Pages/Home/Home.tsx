import React from "react";
import styled, { css } from "styled-components";

const Home = () => {
    return (
        <HomeContainer>
            <HomeTitleContainer>
                <HomeTitle />
            </HomeTitleContainer>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    margin-left: 100px;
`;

const HomeTitle = () => {
    return (
        <>
            <HomeTitleText accent={false}>안녕하세요</HomeTitleText>
            <HomeTitleText accent={true}>대학생 1인 개발자</HomeTitleText>
            <HomeTitleText accent={false}>LR입니다</HomeTitleText>
        </>
    )
};

const HomeTitleContainer = styled.div`
    margin: 10px;
`;

const HomeTitleText = styled.p<{accent : boolean}>`
    font-size: 80px;
    margin: 0px;

    ${(props) =>
        props.accent &&
        css`
            color: #164EAB;
            font-weight: bold;
        `
    }
`;

export default Home;