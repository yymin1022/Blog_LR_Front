import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <HomeContainer>
            <HomeTitleContainer>
                <HomeTitle />
            </HomeTitleContainer>

            <HomeNavContainer>
                <HomeNav />
            </HomeNavContainer>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    margin-left: 100px;
`;

const HomeNav = () => {
    return (
        <>
            <HomeNavItem postType="blog" />
            <HomeNavItem postType="project" />
            <HomeNavItem postType="solving" />
            <HomeNavItem postType="about" />
        </>
    );
}

const HomeNavContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin: 10px;
    
    a{
        text-decoration: none;
    }

    p{
        margin: 10px;

        font-family: "NanumSquare";
        font-size: 20px;
        font-weight: 700;
    }
`;

const HomeNavItem = (props : any) => {
    let btnString : string = "";
    let postType : string = props.postType as string;

    switch(postType){
        case "blog":
            btnString = "Blog";
            break;
        case "project":
            btnString = "Project";
            break;
        case "solving":
            btnString = "Problem Solving";
            break;
        case "about":
            btnString = "About";
            break;
    }

    return (
        <Link to={`/postlist/${postType}`}>
            <p>{btnString}</p>
        </Link>
    )
};

const HomeTitle = () => {
    return (
        <>
            <HomeTitleText accent={false}>안녕하세요</HomeTitleText>
            <HomeTitleText accent={true}>대학생 1인 개발자</HomeTitleText>
            <HomeTitleText accent={false}>LR입니다</HomeTitleText>
        </>
    );
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