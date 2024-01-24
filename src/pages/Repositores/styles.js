import styled from "styled-components"; 
import { Link } from "react-router-dom";

export const Loading = styled.div`
   height: 100vh;
   color: #FFf;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0 0 20px rgba(0,0,0, 0.2);
    > h1 { 
        color: #FFF;

    }
`;

export const Owner = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    >img {
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    >h1 { 
        font-size: 30px;
        color: #0d2636;
        
    }

    >p {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4px;
        max-width: 400px;

    }
   
`;

export const BackButton = styled(Link)`
    border: none;
    outline: 0;
    background-color: transparent;
    margin-top: 30px;

    >svg {
        width: 25px;
        height: 25px;
        color: #000;
    }
`;

export const IssuesList = styled.ul`
    list-style: none;
    margin-top: 60px;

    >li {
        display: flex;
        padding: 15px 10px;
    }

    > li img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #0D2636;
        margin-right: 16px;
    }

    > li div {
        flex: 1;
        margin-left: 12px;

        >strong {
            font-size: 15px;
            display: flex;
            flex-direction: column;

            span {
                width: fit-content;
               background: #222;
               color: #FFF;
               border-radius: 4px;
               font-size: 12px;
               padding: 4px 7px;
               font-weight: 600;
               margin: 6px 0;
               
           }
        }

        
        > strong a {
            
                text-decoration: none;
                color: #222;
                transform: 0.3ms;
                &:hover{
                    color: #0071db;
                }
               
        }

        p {
            color: #000;
            font-size: 12px;
            margin-top: 10px;
        }

    }
    `;