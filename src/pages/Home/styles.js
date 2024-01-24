import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0 0 20px rgba(0,0,0, 0.2);

    >h1{
        font-size: 20px;
        display: flex;
        align-items: center;

        svg{
            margin-right: 10px;
        }
    }

`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;

    input {
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
    
`;

export const SubmitButton = styled.button.attrs({
    type: "submit"
})`
    background-color: #0D2636;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: #FFF;
    }

    
`;

export const List = styled.ul`
   list-style: none;
   margin-top: 20px;

   > li {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
        border-top: 1px solid #eee;
    }

    > a {
        color: #0D2636;
        text-decoration: none;
    }
   }
    
`;

export const DeleteButton = styled.button`
    margin-right: 6px;
    background: transparent;
    color: red;
    border: none;
    outline: 0;
`;