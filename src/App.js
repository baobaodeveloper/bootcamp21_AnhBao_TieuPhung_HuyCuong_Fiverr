import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Route path='/list_type' element={<ListTypeWorkPage />} />
        <Route
          path='/list_work'
          element={
            <HomeTemplate position=''>
              <ListWorkPage />
            </HomeTemplate>
          }
        />
        <Route path='/list_work/:id' element={<WorkDetailPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
