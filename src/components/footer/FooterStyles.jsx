import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionLink = styled(Link)`
  cursor: pointer;
  color: #333333;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: none;
    color: #7bd0e0;
    font-weight: bold;
    display: inline-block;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    display: inline-block;
  }
`;

export const List = styled.li`
  display: inline-block;
`;

export const Container = styled.div`
background: rgb(199 210 254);
  padding: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  flex: 1,
  background: #fffcfd;
  bottom: 0;
  width: WINDOW_WIDTH%;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 800px) {
    background: #fffcfd;
  }`;

export const OptionLink2 = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #333333;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  &:hover {
    text-decoration: none;
    color: #000000;
    display: inline-block;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    display: inline-block;
  }
`;

export const Icon = styled(Link)`
  padding: 20px;
  position: relative;
  display: inline-block;
  color: rgb(49 46 129);
  &:hover {
    color: #7bd0e0;
    display: inline-block;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    display: inline-block;
  }
`;

export const Button = styled.button`
  position: absolute;
  border: none;
  background: none;
  display: inline-block;
  font-size: 1.5rem;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  top: 0.5rem;
  right: 0.3rem;
  line-height: 0;
`;

export const Form = styled.form`
  margin-bottom: 0;
  padding-bottom: 0;
  background-color: grey;
  position: relative;
`;
