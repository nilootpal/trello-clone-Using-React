import styled from "styled-components";

export const MainContent = styled.section`
    box-sizing: border-box;
    padding: 0;

    .TopStrip{
        width: 100%;
        min-height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-bottom: 1px solid #f4f5f7;
        padding: 8px;
        box-sizing: border-box;
        position: relative;

        margin: 0;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        color: #172b4d;

        & span{
            font-size: 14px;
            color: #6b778c;
            font-weight: 400;
            text-decoration: underline;
            margin: 0 0 0 10px;
        }
    }

    .MainContainer{
        padding: 4px;
    }
`

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;

    & h3{
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        padding: 0 12px;
        color: #fff;
        margin: 0;
    }

    .separator{
        width: 1px;
        height: 16px;
        background-color: hsla(0,0%,100%,.3);
        margin: 8px;
    }

    div svg{
        font-size: 18px;
        &:hover{
            color: #f2d600;
            transform: scale(1.2);
        }
    }

    button{
        width: max-content;
        color: #fff;
        background-color: hsla(0,0%,100%,.3);
        padding: 0 12px;
        font-size: 14px;
        border: 0;
        border-radius: 3px;
        outline: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 32px;

        & svg{
            width: 16px;
            height: 16px;
            top: 1px;
        }
    }

    .user{
        color: #172b4d;
        background-color: #dfe1e6 !important;
        height: 32px;
        width: 32px;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        border-radius: 50%;
        font-weight: 700;
        margin-left: 4px;
    }

`

export const ContentDnD = styled.div`
    width: 97vw;
    height: calc(100vh - 142px);
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;


    .AddMoreListWrapper{
        min-width: 272px;
        width: 272px;
        margin: 0 8px;
        background-color: hsla(0,0%,100%,.2);
        border-radius: 3px;
        padding: 10px; 

        &:hover{
            background-color: hsla(0,0%,100%,.4);
        }

        .NewCardWrapper{
            display: flex;
            align-items: center;
            color: #5e6c84;
            border-radius: 3px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            padding: 2px 0;
            cursor: pointer;
            color: #fff;
        }

        & form{
            & input{
                width: 100%;
                background-color: #fff;
                border: 2px solid #0079bf;
                border-radius: 3px;
                outline: none;
                box-sizing: border-box;
                padding: 8px 12px;
                margin-bottom: 8px;
            }

            & div{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            & button{
                width: max-content;
                color: #fff;
                background-color: #0079bf;
                padding: 0 12px;
                font-size: 14px;
                height: 32px;
                border: 0;
                border-radius: 3px;
                outline: 0;
                cursor: pointer;
                display: flex;
                align-items: center
            }

            & svg { 
                font-size: 20px !important;
                margin-left: 10px;
            }
        }
    }
`

export const ListCard = styled.div`
    min-width: 272px;
    width: 272px;
    height: auto;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
    background-color: #ebecf0;
    margin: 0 4px;
    border-radius: 3px;
    padding: 10px 8px 8px;

    .ListCardTitleWrapper{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        overflow-y: auto;
        height: 40px;

        & svg{
            font-size: 20px;
        }
    }
`

export const TaskCardWrapper = styled.div`
    min-height: 2px;  

    .AddMoreTaskWrapper{
        color: #5e6c84;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        padding: 4px 4px;
        cursor: pointer;

        &:hover{
            background-color: rgba(9,30,66,.0784313725490196);
            color: #172b4d;
        }

        &.NewTaskWrapper{
            display: flex;
            align-items: flex-start
        }
    }

    & form{
            & input{
                width: 100%;
                background-color: #fff;
                border: 2px solid #0079bf;
                border-radius: 3px;
                outline: none;
                box-sizing: border-box;
                padding: 8px 12px;
                margin-bottom: 8px;
            }

            & div{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            & button{
                width: max-content;
                color: #fff;
                background-color: #0079bf;
                padding: 0 12px;
                font-size: 14px;
                height: 32px;
                border: 0;
                border-radius: 3px;
                outline: 0;
                cursor: pointer;
                display: flex;
                align-items: center
            }

            & svg { 
                font-size: 20px !important;
                margin-left: 10px;
            }
        }
`

