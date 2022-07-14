import styled from "styled-components";

export const SideMenu = styled.nav`
     width: 40px;
    height: 100vh;
    padding: 4px;
    box-sizing: border-box;
    background-color: #0480c9;
    background-image: linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.05));
    position: fixed;
    top: 44px;
    left: 0;
    box-shadow: -6px 2px 8px 1px #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        background-image: none;
    }

    .Icon{
        color: white;
        width: 20px;
        height: 20px;
    }

    .SidemenuButtonWrapper{
        width: 32px;
        height: 32px;
        background-color: white;
        border: 0;
        border-radius: 3px;
        outline: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #004269;

        & svg{
            width: 20px;
            height: 20px;
        }
    }
`
