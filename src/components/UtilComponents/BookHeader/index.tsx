import { Link, NavLink } from 'react-router-dom';
import BookButton from '../../FormComponents/BookButton';

export function Header() {
  return (
    <>
      <div className="flex items-center justify-between pt-2 pr-8 pl-8 pb-2 bg-white ">
        <div className="text-4xl">
          <span className="text-4xl text-green-400">Discussion</span> Forum.
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink to="/" className="actives">
                Home
              </NavLink>
            </li>
            <li className="pl-10 pr-10">
              <NavLink to="/Categories" className="actives">
                Questions
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="actives">
                Answers
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/login">
            <BookButton
              className=" bg-red-600 text-white font-bold py-2 w-[6rem] rounded-lg"
              children="Logout"
              type="submit"
              onClick={() => {
                localStorage.clear();
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
