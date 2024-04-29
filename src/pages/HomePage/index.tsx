import { SetStateAction, useEffect, useState } from 'react';
import booksimage from '../../assets/attraction/Home_Bg.jpeg';

// Importing components
import BookInput from '../../components/FormComponents/BookInput';
import { BookCard } from '../../components/UtilComponents/BookCard';

export default function Home() {
  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/book/fetch-book')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

 

  return (
    <div className=" bg-gray-100">
      <div className="">
      <div className="relative h-screen">
          <img
    src={"https://isparkinfo.com/wp-content/uploads/bfi_thumb/forum-on-website10-39oujvcemqktfg8p1wioe8@2x.jpg"}
    alt="Background Image"
    className="w-full object-cover object-top"
  />
</div>

        </div>
        <div className="mt-5 mb-10  h-screen">
          <div className=""> 
          <div>eijdiej</div>
          </div>
        </div>
      </div>
  );
}
