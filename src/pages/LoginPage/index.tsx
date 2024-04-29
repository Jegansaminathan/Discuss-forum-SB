// Importing packages
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Importing components
import BookInput from '../../components/FormComponents/BookInput';
import BookButton from '../../components/FormComponents/BookButton';

// Importing assets
import Girlbook from '../../assets/attraction/Girlbook.svg';
import whitelogo from '../../assets/svg/brand/white-logo.svg';
import LoadingBtn from '../../components/FormComponents/LoadingBtn';
import GoogleAuthConfiguration from '../../components/GoogleOAuthComponents';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  localStorage.setItem('flag', '0');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/api/auth/manual/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      console.log('Server Response:', data);
      localStorage.setItem('usid', data.userId);
      localStorage.setItem('profile', data.profilePicture);
      localStorage.setItem('name', data.name);
      localStorage.setItem('email', data.email);

      if (response.status === 200) {
        console.log('Logged in:', data);
        navigate('/');
      } else {
        if (response.status === 404) {
          alert("Account Not yet Registered");
        }
        if (response.status === 401) {
          alert("Invalid Credentials!");
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-white p-5 overflow-hidden shadow-custom rounded-lg flex">
      
        <div className="text-center justify-center items-center pr-2">
          <div className="mt-[4rem] text-black text-3xl Nunito mb-5">Sign in.</div>

          

          
          <form onSubmit={handleSubmit}>
            <div>
              <BookInput
                className="rounded-md border border-gray-200 mb-2 w-[21rem] h-12 pl-4 text-sm mt-2"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <BookInput
                className="rounded-md border border-gray-200 mb-2 w-[21rem] h-12 pl-4 text-sm "
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="text-m mt-0 text-[#878787]">
              <ul className="flex">
                <li className="p-1 pl-12"></li>
                <li className="p-1 pr-12 ml-auto">
                  <div></div>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              {isLoading ? (
                <LoadingBtn />
              ) : (
                <BookButton
                  className="bg-[#2B66F6] text-white font-bold py-2 w-[21rem] rounded"
                  children="Login"
                  type="submit"
                  onClick={() => {}}
                />
              )}
            </div>
          </form>

          <div className="text-m text-[#696868] mt-3 font-semibold">
            New User?{' '}
            <span className="text-black">
              <Link to="/register">
                <span>Sign Up</span>
              </Link>
            </span>
          </div>

          <div className="text-m mt-12 text-[#878787]">
            <ul className="flex">
              <li className="p-2 pl-4">Privacy Policy</li>
              <li className="p-2 pr-7 ml-auto">Copyright 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
