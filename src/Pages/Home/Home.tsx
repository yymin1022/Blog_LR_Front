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
    width: 100%;

    margin-left: 100px;

    @media screen and (max-width: 1400px){
        margin: 0px;
    }
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
    display: flex;
    flex-direction: column;

    margin: 10px;

    p{
        margin: 10px;

        color: black;
        font-size: 20px;
        font-weight: 700;
    }
`;

const HomeNavItem = (props : any) => {
    let btnString : string = "";
    let btnTo : string = "";
    let postType : string = props.postType as string;

    switch(postType){
        case "blog":
            btnString = "Blog";
            btnTo = "/postlist/blog";
            break;
        case "project":
            btnString = "Project";
            btnTo = "/postlist/project";
            break;
        case "solving":
            btnString = "Problem Solving";
            btnTo = "/postlist/solving";
            break;
        case "about":
            btnString = "About";
            btnTo = "/postview/about/LR";
            break;
    }

    return (
        <Link to={btnTo}>
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

    @media screen and (max-width: 1400px){
        margin: 10px;
    }
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

    @media screen and (max-width: 1400px){
        font-size: 40px;
    }
`;

export default Home;