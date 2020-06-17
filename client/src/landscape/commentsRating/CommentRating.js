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
              <FactorRating />
            </div>
            <Commentary
              newTitle={newTitle}
              newDescription={newDescription}
              newCount={newCount}
            />
            <VisitDate visitDate={visitDate} />
            <Questionnaire />
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
