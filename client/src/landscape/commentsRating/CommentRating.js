import React from "react";
import FactorRating from "./componets/FactorRating";
import Commentary from "./componets/Commentary";
import Politics from "./componets/Politics";
import Send from "./componets/Send";
import VisitDate from "./componets/VisitDate";
import "./CommentRating.css";
import GeneralRating from "./componets/GeneralRating";
import CurrentPlace from "./componets/CurrentPlace";
import Questionnaire from "./componets/Questionnaire";
import Comments from "./componets/Comments";

const CommentRating = () => {
  const Outcome = {
    title: "",
    description: "",
    generalRating: 0,
    visitDate: "",
    serviceRating: 0,
    locationRating: 0,
    priceRating: 0,
    attentionclient: 0,
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  };

  const serviceRating1 = (Cali) => {
    Outcome.serviceRating = Cali;
  };

  const locationRating2 = (Cali) => {
    Outcome.locationRating = Cali;
  };

  const priceRating3 = (Cali) => {
    Outcome.priceRating = Cali;
  };

  const attentionclient4 = (Cali) => {
    Outcome.attentionclient = Cali;
  };

  const answerOne = (answer) => {
    Outcome.answer1 = answer;
  };
  const answerTwo = (answer) => {
    Outcome.answer2 = answer;
  };
  const answerThree = (answer) => {
    Outcome.answer3 = answer;
  };
  const answerFour = (answer) => {
    Outcome.answer4 = answer;
  };

  const generalQualification = (Cali) => {
    Outcome.generalRating = Cali;
  };

  const visitDate = (date) => {
    Outcome.visitDate = date;
  };
  const newTitle = (title) => {
    Outcome.title = title;
  };
  const newDescription = (description) => {
    Outcome.description = description;
  };
  const states = {
    politicalTerms: false,
    count: 0,
  };
  const newCount = (count) => {
    states.count = count;
  };
  const acceptPolicies = (stat) => {
    states.politicalTerms = stat;
  };
  return (
    <div className="father">
      <h1>COMENTARIOS Y VALORACIÓN</h1>
      <div className="container0">
        <CurrentPlace />
        <div className="container">
          <section className="questions">
            <Politics acceptPolicies={acceptPolicies} />
            <GeneralRating generalQualification={generalQualification} />
            <div className="rating">
              <FactorRating
                serviceRating1={serviceRating1}
                locationRating2={locationRating2}
                priceRating3={priceRating3}
                attentionclient4={attentionclient4}
              />
            </div>
            <Commentary
              newTitle={newTitle}
              newDescription={newDescription}
              newCount={newCount}
            />

            <VisitDate visitDate={visitDate} />
            <Questionnaire
              answerOne={answerOne}
              answerTwo={answerTwo}
              answerThree={answerThree}
              answerFour={answerFour}
            />
          </section>

          <div class="vertical-line"></div>

          <section className="comments">
            <Comments />
          </section>
        </div>
      </div>
      <Send Outcome={Outcome} states={states} />
    </div>
  );
};

export default CommentRating;
