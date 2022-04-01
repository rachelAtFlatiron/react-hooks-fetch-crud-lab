import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questions.map((el, i) => {
            return <QuestionItem key={i} question={el} />
          })
        }
      </ul>
    </section>
  );
}

export default QuestionList;
