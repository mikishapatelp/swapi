
import exp from "constants";
import styled from "styled-components"

export const Container = styled.div`

padding: .3em;
`;

export const CardsList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:space-between;
`;

export const Card = styled.div`
border: 1px solid #232f3e;
border-radius: 10px;
padding:10px;
margin:10px;
text-align:left;
width: 20%;`;

export const Title = styled.span`
font-weight: bold;`;

export const Value = styled.span`
font-style: italic;`;

export const SubHeading = styled.div`
font-size:20px;
text-align: left;
margin-left: 10px;
font-weight:bold;`;

export const Filters = styled.div`
display: flex;
flex-direction: row;
justify-content:left;
margin:10px;
`;

export const Input = styled.input`
  font-size:18px;
  margin: 0 10px;
`;

export const Select = styled.select`
  font-size:21px;
  margin: 0 10px;
`;
export const Button = styled.button `
font-style:italic;
padding:5px;
text-align:right
`;
