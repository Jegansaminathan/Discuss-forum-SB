import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Answer.css'

export default function Answer() {
  
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [questionFieldNames, setQuestionFieldNames] = useState<string[]>([]);
  const [answerFieldNames, setAnswerFieldNames] = useState<string[]>([]);

  useEffect(() => {
    // Fetch questions
    axios.get('http://127.0.0.1:8002/getAllQuestions')
      .then(response => {
        setQuestions(response.data);
        // Initialize answers state with empty arrays for each question
        setAnswers(response.data.map(() => []));
        // Fetch question field names
        setQuestionFieldNames(Object.keys(response.data[0] || {}));
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });

    // Fetch answers
    axios.get('http://127.0.0.1:8002/getAnswer')
      .then(response => {
        setAnswers(response.data);
        // Fetch answer field names
        setAnswerFieldNames(Object.keys(response.data[0] || {}));
      })
      .catch(error => {
        console.error('Error fetching answers:', error);
      });
  }, []);

  // Filter answers based on the question index
  const filterAnswersByQuestionIndex = (qIndex: number) => {
    return answers.filter(answer => answer.idx === questions[qIndex].idx);
  };

  return (
    <div>
    {/* <h2>Questions</h2> */}
    {questions.map((q, index) => (
      <div className='box' key={index}>
        <p className='question'>{q.idx}: {q.username}</p>
        <h3 className='anshead'>Answers</h3>
        {filterAnswersByQuestionIndex(index).map((answer, answerIndex) => (
          <div className='answerbox' key={answerIndex}>
            <p className='answer'>{answer.idx}: answer: {answer.answer}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
  
  );
}