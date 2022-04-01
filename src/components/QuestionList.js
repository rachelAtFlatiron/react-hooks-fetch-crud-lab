import React, { useState, useEffect } from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      await fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(res => setQuestions(res))
    }
    fetchData();
  }, [])

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
