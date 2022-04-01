import React, { useState, useEffect  } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    const fetchData = async() => {
      await fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(res => setQuestions(res))
    }
    fetchData();
  }, [])

  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
