import styled from "styled-components";

export const Topbar = styled.div`
    background-color: #004269;
    height: 44px;
    padding: 6px 4px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .LeftMenu{
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
    }

    .MenuButtonWrapper{
        width: 32px;
        height: 32px;
        background-color: transparent;
        border: 0;
        border-radius: 3px;
        outline: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;

        &:hover{
            background-color: hsla(0,0%,100%,.3)
        }
    }

    .Icon{
        color: white;
        width: 20px;
        height: 20px;
    }

    .LeftMenuItem{
        padding: 0 12px;
        border-radius: 3px;
        color: #fff;
        height: 32px;
        font-size: 14px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;

        &:hover{
            background-color: hsla(0, 0%, 100%, .3);
        }

        &:first-of-type{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
            padding: 0 8px;
        }

        & svg{
            font-size: 18px;
        }

        &:last-of-type{
            background-color: hsla(0, 0%, 100%, .2);
        }
    }

    .RightMenu{
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
    }

    .SearchWrapper{
        position: relative;
        margin-right: 8px;

        & input{
            width: 250px;
            height: 32px;
            border: 1px solid hsla(0,0%,100%,.25);
            border-radius: 3px;
            background-color: hsla(0,0%,100%,.3);
            color: hsla(0,0%,100%,.5);
            padding-left: 30px;
            outline: none;

            &::placeholder{
                color: hsla(0,0%,100%,.5);
            }

            &:focus{
                background-color: white;
                color: black;

                &::placeholder{
                    color: black;
                }
            }
        }

        & svg{
            position: absolute;
            left: 5px;
            top: 7px;
            width: 20px;
            height: 20px;
            font-size: 20px;
            /* color: hsla(0,0%,100%, 0.8); */
        }

        :focus-visible {
            outline: -webkit-focus-ring-color auto 1px;
        }
    }
`
