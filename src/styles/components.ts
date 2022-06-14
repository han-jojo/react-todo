import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  input {
    font-size: 16px;
    border: 0;
    background-color: white;
    width: 70%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Wrapper = styled.div`
  width: 300px;
  margin: 10px 15px;
  padding: 10px 5px;
  background-color: #bdc3c7;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Area = styled.div`
  background-color: "#dfe6e9"
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

export const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: "#e4f2ff";
  display: flex;
  justify-content: space-around;
`;

export const DeleteButton = styled.button`
  border-radius: 35px;
  background-color: #f1c40f;
  &:hover{
    background-color: #3498db;
  }
`;