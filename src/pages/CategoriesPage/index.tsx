// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Question.css';
// import axios from 'axios';

// export default function Categories() {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);
//   const [question, setQuestion] = useState('');
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [answers, setAnswers] = useState<string[][]>([]); // Change type to string[][]
//   const [idx, setIdx] = useState('');
//   const [didx, setDidx] = useState('');
//   const [currentAnswers, setCurrentAnswers] = useState<string[]>([]); // Track current answer input for each question
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8002/getAllQuestions')
//       .then(response => {
//         setQuestions(response.data);
//         // Initialize answers state with empty arrays for each question
//         setAnswers(response.data.map(() => []));
//         // Initialize currentAnswers state with empty strings for each question
//         setCurrentAnswers(response.data.map(() => ''));
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleButtonClick = (category: string) => {
//     navigate(`/listofcategories/${category}`);
//   };

//   const handlePostQuestion = () => {
//     const formData = {
//       "username": question,
//       "idx": idx
//     };
//     axios.post('http://127.0.0.1:8002/addStudent', formData)
//       .then(response => {
//         console.log('Posted question:', question);
//         setShowModal(false);
//       })
//       .catch(error => {
//         console.error('Error posting question:', error);
//       });
//   };

//   const handlePostAnswer = (questionIndex: number, answer: string) => {
//     const formData = {
//       // "questionId": questions[questionIndex].id,
//       "answer": answer,
//       "idx": didx // Include idx in the request payload
//     };
//     console.log(formData)
//     axios.post('http://127.0.0.1:8002/addAnswer', formData)
//       .then(response => {
//         console.log('Posted answer:', answer);
//         // Assuming you want to refresh the list of answers after posting
//         // You may need to fetch updated answers from the server here
//       })
//       .catch(error => {
//         console.error('Error posting answer:', error);
//       });
//   };

//   const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
//     const newCurrentAnswers = [...currentAnswers];
//     newCurrentAnswers[index] = e.target.value; // Update current answer input for the specific index
//     setCurrentAnswers(newCurrentAnswers);
//   };

//   const handleAnswerSubmit = (index: number) => {
//     if (currentAnswers[index].trim() !== '') { // Only store non-empty answers
//       const updatedAnswers = [...answers];
//       updatedAnswers[index] = [...updatedAnswers[index], currentAnswers[index]]; // Add new answer to the existing array of answers
//       setAnswers(updatedAnswers);
//       handlePostAnswer(index, currentAnswers[index]); // Post the answer to the server
//       const newCurrentAnswers = [...currentAnswers];
//       newCurrentAnswers[index] = ''; // Clear current answer input for the specific index
//       setCurrentAnswers(newCurrentAnswers);
//     }
//   };

//   return (
//     <div>
//       <div className='mt-10 bg-black'>hai</div>
//       <button className="ask-question-btn" onClick={() => setShowModal(true)}>Ask Question</button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
//             <h2>Ask a Question</h2>
//             <input className='st' type="number" value={idx} placeholder='question number' onChange={(e) => setIdx(e.target.value)} />

//             <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
//             <button onClick={handlePostQuestion}>Post</button>
//           </div>
//         </div>
//       )}

//       <div className='questionMain'>
//         <h2>Questions</h2>
//         {questions.map((q, index) => (
//           <div className="questionContainer" key={index}>
//             <p className='question'>{index + 1}. {q.username}</p>
//             <div className="inside">
//             <input className='ss' type="number" value={didx[index]} placeholder='question number' onChange={(e) => setDidx(e.target.value)} />

//               <textarea
//                 placeholder='Type your answer'
//                 value={currentAnswers[index]} // Use currentAnswers state to track answer input for each question
//                 onChange={(e) => handleAnswerChange(e, index)} // Pass index to handleAnswerChange
//               />
//               {/* Button to submit answer */}
//               <button
//                 className='button1'
//                 type='submit'
//                 onClick={() => handleAnswerSubmit(index)}
//               >
//                 Submit
//               </button>
//               {/* Display submitted answers */}
//               {answers[index].map((answer, idx) => (
//                 <p key={idx} className="answer">Answer {idx + 1}: {answer}</p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import axios from 'axios';

export default function Categories() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<string[][]>([]); // Change type to string[][]
  const [idx, setIdx] = useState('');
  const [didx, setDidx] = useState('');
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]); // Track current answer input for each question
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8002/getAllQuestions')
      .then(response => {
        setQuestions(response.data);
        // Initialize answers state with empty arrays for each question
        setAnswers(response.data.map(() => []));
        // Initialize currentAnswers state with empty strings for each question
        setCurrentAnswers(response.data.map(() => ''));
      })
      .catch(error => {
        setError(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = (category: string) => {
    navigate(`/listofcategories/${category}`);
  };

  const handlePostQuestion = () => {
    const formData = {
      "username": question,
      "idx": idx
    };
    axios.post('http://127.0.0.1:8002/addStudent', formData)
      .then(response => {
        console.log('Posted question:', question);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error posting question:', error);
      });
  };

  const handlePostAnswer = (questionIndex: number, answer: string) => {
    const formData = {
      // "questionId": questions[questionIndex].id,
      "answer": answer,
      "idx": didx // Include idx in the request payload
    };
    console.log(formData)
    axios.post('http://127.0.0.1:8002/addAnswer', formData)
      .then(response => {
        console.log('Posted answer:', answer);
        // Assuming you want to refresh the list of answers after posting
        // You may need to fetch updated answers from the server here
      })
      .catch(error => {
        console.error('Error posting answer:', error);
      });
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const newCurrentAnswers = [...currentAnswers];
    newCurrentAnswers[index] = e.target.value; // Update current answer input for the specific index
    setCurrentAnswers(newCurrentAnswers);
  };

  const handleAnswerSubmit = (index: number) => {
    if (currentAnswers[index].trim() !== '') { // Only store non-empty answers
      const updatedAnswers = [...answers];
      updatedAnswers[index] = [...updatedAnswers[index], currentAnswers[index]]; // Add new answer to the existing array of answers
      setAnswers(updatedAnswers);
      handlePostAnswer(index, currentAnswers[index]); // Post the answer to the server
      const newCurrentAnswers = [...currentAnswers];
      newCurrentAnswers[index] = ''; // Clear current answer input for the specific index
      setCurrentAnswers(newCurrentAnswers);
    }
  };

  return (
    <div>
      <div className='mt-10 bg-black'>hai</div>
      <button  className="ask-question-btn" onClick={() => setShowModal(true)}>Ask Question</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2 >Ask a Question</h2>
            <input className='st' type="number" value={idx} placeholder='question number' onChange={(e) => setIdx(e.target.value)} />

            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
            <button onClick={handlePostQuestion}>Post</button>
          </div>
        </div>
      )}

      <div className='questionMain'>
        <h2>Questions</h2>
        {questions.map((q, index) => (
          <div className="questionContainer" key={index}>
            <p className='question'>{index + 1}. {q.username}</p>
            <div className="inside">
            <input className='ss' type="number" value={didx[index]} placeholder='question number' onChange={(e) => setDidx(e.target.value)} />

              <textarea
                placeholder='Type your answer'
                value={currentAnswers[index]} // Use currentAnswers state to track answer input for each question
                onChange={(e) => handleAnswerChange(e, index)} // Pass index to handleAnswerChange
              />
              {/* Button to submit answer */}
              <button
                className='button1'
                type='submit'
                onClick={() => handleAnswerSubmit(index)}
              >
                Submit
              </button>
              {/* Display submitted answers */}
              {answers[index].map((answer, idx) => (
                <p key={idx} className="answer">Answer {idx + 1}: {answer}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
