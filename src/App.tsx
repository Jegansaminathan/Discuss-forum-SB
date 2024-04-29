import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './Layout/NavigationLayout';
import authRoutes from './Router/auth-routes';
import nonAuthRoutes from './Router/non-auth-routes';
import SuspenseLayout from './Layout/SuspenseLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SuspenseLayout />}>
            <Route element={<RootLayout />}>
              {authRoutes.navigationRouts.map((data) => {
                return <Route path={data.path} key={data.name} element={data.component} />;
              })}
            </Route>
            <Route>
              {nonAuthRoutes.map((data) => {
                return <Route path={data.path} element={data.component} key={data.name} />;
              })}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
