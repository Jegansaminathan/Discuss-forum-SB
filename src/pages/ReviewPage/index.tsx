// Importing packages
import { useEffect, useState } from 'react';

// Importing styles
import './style.scss';
import { useParams } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function ReviewPage() {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState([]);
  const { bookId } = useParams();
  const [book, setBook] = useState();
  var User_name = localStorage.getItem('name');
  var User_id = localStorage.getItem('usid');

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/review/fetch-review/${bookId}`);
      const data = await response.json();
      setComments(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching review:', error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/book/fetch-book/review/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        fetchReviews();
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, [bookId]);

  if (book === undefined || comments === undefined) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const handleCommentSubmit = async () => {
    if (comment.trim() !== '') {
      try {
        const response = await fetch('http://localhost:8080/api/review/addReview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            bookId: bookId,
            userId: User_id,
            userName: User_name,
            userReview: comment.trim()
          })
        });

        if (response.status === 201) {
          alert('Your Review is Added Successfully');
          setComment('');
          fetchReviews();
        } else {
          if (response.status === 400) {
            alert(response.status);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="p-10 bg-slate-200">
      <div className="page-container">
        <div className="flex">
          <div className="w-1/2">
            <div className="ml-[17rem]">
              <img className="book-image" src={book[0].imageUrl} alt="Book Cover" />
            </div>
          </div>
          <div className="w-1/3 flex justify-items-center">
            <div className="content-box">
              <div className="content-box-title mt-3">Book Information</div>
              <div className="content-item">
                <div className="content-label">
                  Title : <span>{book[0].title}</span>
                </div>
              </div>
              <div className="content-item">
                <div className="content-label">
                  Author's Name : <span>{book[0].author}</span>
                </div>
              </div>
              <div className="content-item">
                <div className="content-label">
                  Genre : <span>{book[0].category}</span>
                </div>
              </div>
              <div className="content-item">
                <div className="content-label">
                  Rating :{' '}
                  <div className="-mt-5">
                    <span className="">
                      <Player
                        autoplay
                        loop
                        src="https://lottie.host/497c0df2-7573-4e34-a756-a812395f0f39/pyNbwTgzF5.json"
                        style={{ height: '1rem', width: '100px' }}
                      ></Player>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-[7rem]">
          <div className="">
            <div className="content-item">
              <h2 className="review-title text-blue-400">Review</h2>
              <div className="text-base">{book[0].review}</div>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg">
          <div className="h-[20rem] p-5 flex border border-gray-300 rounded-lg shadow-md">
            <div className="flex-1 pr-4">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">Write a Review</h2>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Type your comment here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <button
                className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleCommentSubmit}
              >
                Add Review
              </button>
            </div>

            <div className="flex-1 ">
              <h2 className="text-xl font-semibold mb-4 text-blue-500">User Review</h2>
              <div className="p-2 border border-gray-300 rounded-md h-[14.5rem] overflow-x-hidden overflow-y-auto w-[50rem]">
                <div className="">
                  {comments.map((comment, index) => (
                    <div key={index} className="mb-1">
                      <div className="text-xl">{comment.userName}</div>
                      <div className="ml-6">{comment.userReview}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
