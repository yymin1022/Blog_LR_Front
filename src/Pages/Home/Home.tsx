import React from "react";
import styled, { css } from "styled-components";

const Home = () => {
    return (
        <HomeContainer>
            <HomeTitleContainer>
                <HomeTitleText>안녕하세요</HomeTitleText>
                <HomeTitleText color="blue">대학생 1인 개발자</HomeTitleText>
                <HomeTitleText>LR입니다</HomeTitleText>
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

const HomeTitleText = styled.p`
    font-size: 80px;
    margin: 0px;

    ${(props) =>
        props.color == "blue" &&
        css`
            color: #164EAB;
            font-weight: bold;
        `
    }
`;

export default Home;