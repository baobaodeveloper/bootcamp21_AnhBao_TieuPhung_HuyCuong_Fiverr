import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/loading/Loading';
import {
  HomePage,
  ListTypeWorkPage,
  ListWorkPage,
  LoginPage,
  Register,
  UserPage,
  WorkDetailPage,
} from './pages';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';

function App() {
  return (
    <>
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <HomeTemplate position='fixed'>
                <HomePage />
              </HomeTemplate>
            }
          />
          <Route
            path='/list_type/:type'
            element={
              <HomeTemplate position=''>
                <ListTypeWorkPage />
              </HomeTemplate>
            }
          />

          <Route
            exact
            path='/list_work/:typeJob'
            element={
              <HomeTemplate position=''>
                <ListWorkPage />
              </HomeTemplate>
            }
          />

          <Route
            path='/list_work/:typeJob/:id'
            element={
              <HomeTemplate position=''>
                <WorkDetailPage />
              </HomeTemplate>
            }
          />

          <Route
            exact
            path='/user'
            element={
              <HomeTemplate position=''>
                <UserPage />
              </HomeTemplate>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
