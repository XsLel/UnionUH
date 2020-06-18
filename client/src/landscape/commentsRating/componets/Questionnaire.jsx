import React from "react";
import { Button, Grid, GridRow, GridColumn } from "semantic-ui-react";
import { useState } from "react";

const Questionnaire = (props) => {
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [colorThree, setColorThree] = useState("");
  const questionOneButtonOne = () => {
    questionOne("si");
    setColorOne("blue");
    setColorTwo("");
    setColorThree("");
  };
  const questionOneButtonTwo = () => {
    questionOne("no");
    setColorOne("");
    setColorTwo("blue");
    setColorThree("");
  };
  const questionOneButtonThree = () => {
    questionOne("no se");
    setColorOne("");
    setColorTwo("");
    setColorThree("blue");
  };
  const questionOne = (v) => {
    props.answerOne(v);
  };
  const [colorOne2, setColorOne2] = useState("");
  const [colorTwo2, setColorTwo2] = useState("");
  const [colorThree2, setColorThree2] = useState("");
  const questionTwoButtonOne = () => {
    questionTwo("si");
    setColorOne2("blue");
    setColorTwo2("");
    setColorThree2("");
  };
  const questionTwoButtonTwo = () => {
    questionTwo("no");
    setColorOne2("");
    setColorTwo2("blue");
    setColorThree2("");
  };
  const questionTwoButtonThree = () => {
    questionTwo("no se");
    setColorOne2("");
    setColorTwo2("");
    setColorThree2("blue");
  };
  const questionTwo = (v) => {
    props.answerTwo(v);
  };

  const [colorOne3, setColorOne3] = useState("");
  const [colorTwo3, setColorTwo3] = useState("");
  const [colorThree3, setColorThree3] = useState("");
  const questionThreeButtonOne = () => {
    questionThree("si");
    setColorOne3("blue");
    setColorTwo3("");
    setColorThree3("");
  };
  const questionThreeButtonTwo = () => {
    questionThree("no");
    setColorOne3("");
    setColorTwo3("blue");
    setColorThree3("");
  };
  const questionThreeButtonThree = () => {
    questionThree("no se");
    setColorOne3("");
    setColorTwo3("");
    setColorThree3("blue");
  };
  const questionThree = (v) => {
    props.answerThree(v);
  };

  const [colorOne4, setColorOne4] = useState("");
  const [colorTwo4, setColorTwo4] = useState("");
  const [colorThree4, setColorThree4] = useState("");
  const questionFourButtonOne = () => {
    questionFour("si");
    setColorOne4("blue");
    setColorTwo4("");
    setColorThree4("");
  };
  const questionFourButtonTwo = () => {
    questionFour("no");
    setColorOne4("");
    setColorTwo4("blue");
    setColorThree4("");
  };
  const questionFourButtonThree = () => {
    questionFour("no se");
    setColorOne4("");
    setColorTwo4("");
    setColorThree4("blue");
  };
  const questionFour = (v) => {
    props.answerFour(v);
  };
  return (
    <GridColumn>
      <br></br>
      <h2>Cuestionario (Opcional)</h2>
      <Grid columns={2}>
        <GridRow>
          <p>Este lugar turístico es una joya oculta ?</p>
          <Button.Group size="smoll">
            <Button color={colorOne} onClick={questionOneButtonOne}>
              SI
            </Button>
            <Button color={colorTwo} onClick={questionOneButtonTwo}>
              NO
            </Button>
            <Button color={colorThree} onClick={questionOneButtonThree}>
              NO SE
            </Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>En este lugar o actividad se aceptan tarjetas de crédito ?</p>
          <Button.Group size="smoll">
            <Button color={colorOne2} onClick={questionTwoButtonOne}>
              SI
            </Button>
            <Button color={colorTwo2} onClick={questionTwoButtonTwo}>
              NO
            </Button>
            <Button color={colorThree2} onClick={questionTwoButtonThree}>
              NO SE
            </Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>Consideras peligroso el lugar turístico ?</p>
          <Button.Group size="smoll">
            <Button color={colorOne3} onClick={questionThreeButtonOne}>
              SI
            </Button>
            <Button color={colorTwo3} onClick={questionThreeButtonTwo}>
              NO
            </Button>
            <Button color={colorThree3} onClick={questionThreeButtonThree}>
              NO SE
            </Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>Recomendarías este lugar turístico ?</p>
          <Button.Group size="smoll">
            <Button color={colorOne4} onClick={questionFourButtonOne}>
              SI
            </Button>
            <Button color={colorTwo4} onClick={questionFourButtonTwo}>
              NO
            </Button>
            <Button color={colorThree4} onClick={questionFourButtonThree}>
              NO SE
            </Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}></Grid>
    </GridColumn>
  );
};

export default Questionnaire;
