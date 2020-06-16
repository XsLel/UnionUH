import React from "react";
import { Button, Grid, GridRow, GridColumn} from "semantic-ui-react";
import {useState} from 'react'
import "./css/Commentary.css";

const Questionnaire = (props) => {

  const [activeButton1, setActiveButton1] = useState(false);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);
  const [activeButton4, setActiveButton4] = useState(false);
  const [colorButton1, setColorButton1] = useState('');
  const [colorButton2, setColorButton2] = useState('');
  const [colorButton3, setColorButton3] = useState('');
  const [colorButton4, setColorButton4] = useState('');

  
  const questionOneButtonOne = () => {
    questionOne("si");
    setActiveButton1(true)
    setColorButton1('green')

  };
  const questionOneButtonTwo = () => {
    questionOne("no");
    setActiveButton1(true)
    setColorButton1('black')
  };
  const questionOneButtonThree = () => {
    questionOne("no se");
    setActiveButton1(true)
    setColorButton1('grey')
  };
  const questionOne = (v) => {
    props.answerOne(v);
  };

  const questionTwoButtonOne = () => {
    questionTwo("si");
    setActiveButton2(true)
    setColorButton2('green')

  };
  const questionTwoButtonTwo = () => {
    questionTwo("no");
    setActiveButton2(true)
    setColorButton2('black')
  };
  const questionTwoButtonThree = () => {
    questionTwo("no se");
    setActiveButton2(true)
    setColorButton2('grey')
  };
  const questionTwo = (v) => {
    props.answerTwo(v);
  };

  const questionThreeButtonOne = () => {
    questionThree("si");
    setActiveButton3(true)
    setColorButton3('green')
  };
  const questionThreeButtonTwo = () => {
    questionThree("no");
    setActiveButton3(true)
    setColorButton3('black')
  };
  const questionThreeButtonThree = () => {
    questionThree("no se")
    setActiveButton3(true)
    setColorButton3('grey')
  };
  const questionThree = (v) => {
    props.answerThree(v);
  };

  const questionFourButtonOne = () => {
    questionFour("si");
    setActiveButton4(true)
    setColorButton4('green')
  };
  const questionFourButtonTwo = () => {
    questionFour("no")
    setActiveButton4(true)
    setColorButton4('black')
  };
  const questionFourButtonThree = () => {
    questionFour("no se")
    setActiveButton4(true)
    setColorButton4('grey')
  };
  const questionFour = (v) => {
    props.answerFour(v);
  };
  return (
    <GridColumn>
      <h2>Cuestionario (opcional)</h2>

      <Grid columns={2}>
        <GridRow>
          <p>Este lugar turístico es una joya oculta ?</p>
          <Button.Group className={activeButton1? "buttonTrue": "buttonFalse"} size="large">             
            <Button color={colorButton1}  onClick={questionOneButtonOne} >SI</Button>
            <Button color={colorButton1}  onClick={questionOneButtonTwo} >NO</Button>
            <Button color={colorButton1}  onClick={questionOneButtonThree} >NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>En este lugar o actividad se aceptan tarjetas de crédito ?</p>
          <Button.Group className={activeButton2? "buttonTrue": "buttonFalse"} size="large">
            <Button color={colorButton2} onClick={questionTwoButtonOne}>SI</Button>
            <Button color={colorButton2} onClick={questionTwoButtonTwo}>NO</Button>
            <Button color={colorButton2} onClick={questionTwoButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>Consideras peligroso el lugar turístico ?</p>
          <Button.Group className={activeButton3? "buttonTrue": "buttonFalse"} size="large">
            <Button color={colorButton3} onClick={questionThreeButtonOne}>SI</Button>
            <Button color={colorButton3} onClick={questionThreeButtonTwo}>NO</Button>
            <Button color={colorButton3} onClick={questionThreeButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>Recomendarías este lugar turístico ?</p>
          <Button.Group className={activeButton4? "buttonTrue": "buttonFalse"} size="large">
            <Button color={colorButton4} onClick={questionFourButtonOne}>SI</Button>
            <Button color={colorButton4} onClick={questionFourButtonTwo}>NO</Button>
            <Button color={colorButton4} onClick={questionFourButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}></Grid>
    </GridColumn>
  );
};

export default Questionnaire;
