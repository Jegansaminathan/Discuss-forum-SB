// Importing packages
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/UtilComponents/BookHeader';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
