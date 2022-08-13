import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  color:green;
}
`;

const Body = styled.body`
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: relative;
    background: #993399;
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }
`;

const Division = styled.button`
  font-size: 1.8em;
  border: #00;
  padding: 10px;
  margin: 0.2em;
  border-radius: 50px;
  margin-top: 10px;
  background-color: #e7b2a4;
  color: #000;
`;
const Main = styled.div`
  height: 80vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: #ff6781 solid 5px;
  border-radius: 50px;
  box-shadow: 5px 7px 2px #f9c6cf;
  margin-left: 20%;
  margin-top: 10vh;
  position: absolute;
`;
const TituloUm = styled.h1`
  color: #fff;
  margin-bottom: 15px;
`;

const TituloDois = styled.h2`
  color: #fff;
  margin-bottom: 15px;
`;
const Input = styled.input`
  font-size: 3vw;
  border-radius: 10px;
  width: 30%;
  margin-left: 35%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 35%;
    height: 5.5vh;
    margin-left: 35%;
  }
`;
const BoxInput = styled.section`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

class Calculadora extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    });
  };

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 / n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  som = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 + n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: 0,
        n2: 0
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  render() {
    return (
      <Body>
        <GlobalStyle />
        <Main>
          <TituloUm>Calculadora</TituloUm>
          <TituloDois>{this.state.res}</TituloDois>
          <BoxInput>
            <Input
              value={this.state.n1}
              type="number"
              onChange={this.handleChange1}
            />
            <Input value={this.state.n2} onChange={this.handleChange2} />
          </BoxInput>
          <div>
            <Division onClick={this.div}>/</Division>
            <Division onClick={this.mult}>*</Division>
            <Division onClick={this.sub}>-</Division>
            <Division onClick={this.som}>+</Division>
            <Division onClick={this.clear}>ERASE</Division>
          </div>
        </Main>
      </Body>
    );
  }
}

export default Calculadora;
