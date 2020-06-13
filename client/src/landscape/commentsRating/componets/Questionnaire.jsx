import React from "react";
import { Button, Grid, GridRow, GridColumn } from "semantic-ui-react";

const Questionnaire = (props) => {
  const questionOneButtonOne = () => {
    questionOne("si");
  };
  const questionOneButtonTwo = () => {
    questionOne("no");
  };
  const questionOneButtonThree = () => {
    questionOne("no se");
  };
  const questionOne = (v) => {
    props.answerOne(v);
  };

  const questionTwoButtonOne = () => {
    questionTwo("si");
  };
  const questionTwoButtonTwo = () => {
    questionTwo("no");
  };
  const questionTwoButtonThree = () => {
    questionTwo("no se");
  };
  const questionTwo = (v) => {
    props.answerTwo(v);
  };

  const questionThreeButtonOne = () => {
    questionThree("si");
  };
  const questionThreeButtonTwo = () => {
    questionThree("no");
  };
  const questionThreeButtonThree = () => {
    questionThree("no se");
  };
  const questionThree = (v) => {
    props.answerThree(v);
  };

  const questionFourButtonOne = () => {
    questionFour("si");
  };
  const questionFourButtonTwo = () => {
    questionFour("no");
  };
  const questionFourButtonThree = () => {
    questionFour("no se");
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
          <Button.Group size="large">
            <Button onClick={questionOneButtonOne}>SI</Button>
            <Button onClick={questionOneButtonTwo}>NO</Button>
            <Button onClick={questionOneButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>En este lugar o actividad se aceptan tarjetas de crédito ?</p>
          <Button.Group size="large">
            <Button onClick={questionTwoButtonOne}>SI</Button>
            <Button onClick={questionTwoButtonTwo}>NO</Button>
            <Button onClick={questionTwoButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>Consideras peligroso el lugar turístico ?</p>
          <Button.Group size="large">
            <Button onClick={questionThreeButtonOne}>SI</Button>
            <Button onClick={questionThreeButtonTwo}>NO</Button>
            <Button onClick={questionThreeButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}>
        <GridRow>
          <p>Recomendarías este lugar turístico ?</p>
          <Button.Group size="large">
            <Button onClick={questionFourButtonOne}>SI</Button>
            <Button onClick={questionFourButtonTwo}>NO</Button>
            <Button onClick={questionFourButtonThree}>NO SE</Button>
          </Button.Group>
        </GridRow>
      </Grid>
      <Grid columns={2}></Grid>
    </GridColumn>
  );
};

export default Questionnaire;
