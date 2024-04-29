// Importing packages
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Importing components
import BookInput from '../../components/FormComponents/BookInput';
import BookButton from '../../components/FormComponents/BookButton';
import LoadingBtn from '../../components/FormComponents/LoadingBtn';

// Importing assets
import whitelogo from '../../assets/svg/brand/white-logo.svg';
import GoogleAuthConfiguration from '../../components/GoogleOAuthComponents';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.status === 201) {
        navigate('/login');
        setFormData(formData);
        const data = await response.json();
        console.log('Server Response:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bgclr bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-white p-5 overflow-hidden shadow-custom rounded-lg flex">
       

        <div className=" text-center justify-center items-center pr-2">
          <div className="mt-[3rem] text-black text-3xl Nunito mb-10">Sign up for an account</div>

         


          
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center text-sm font-black">
              <div className="p-2">
                <BookInput
                  className="rounded-md border border-gray-200 w-[10rem] h-12 pl-4"
                  name="firstname"
                  type="text"
                  placeholder="E.g. Kavin"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className="p-2">
                <BookInput
                  className="rounded-md border border-gray-200 w-[10rem] h-12 pl-4"
                  name="lastname"
                  type="text"
                  placeholder="E.g. Kavin"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <BookInput
                className="rounded-md border border-gray-200 mb-1 w-[21rem] h-12 pl-4 text-sm"
                name="email"
                type="email"
                placeholder="E.g. kavin@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <BookInput
                className="rounded-md border border-gray-200 mb-1 w-[21rem] h-12 pl-4 text-sm"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="text-m text-[#BEBEBE] mt-2">
              By creating an account, you agreeing to our
              <span className=" text-black"> Privacy Policy</span> and
              <p className=" text-black">Electronics Communication Policy.</p>
            </div>

            <div className="mt-5">
              {isLoading ? (
                <LoadingBtn />
              ) : (
                <BookButton
                  className="bg-[#2B66F6] text-white font-bold py-2 w-[21rem] rounded"
                  children="Sign Up"
                  type="submit"
                  onClick={() => {}}
                />
              )}
            </div>
          </form>
          <div className="text-m text-[#696868] mt-3 font-semibold">
            Already have an account? <span className="text-black">{<Link to="/login">Login</Link>}</span>
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
}
