import '../Styles/index.scss';
import './Styles.scss';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Components/Pages/Main';
import { Table } from '../Components/Pages/Table';
import { Login } from '../Components/Pages/Login';
import { AddUserPopup } from '../Components/Pages/AddUserPopup';
import { NotFoundPage } from '../Components/Pages/NotFoundPage';
import { User } from '../Components/Pages/User';

import OutletWrapper from '../Components/Layouts/OutletWrapper';

function AppComponent() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<OutletWrapper />}>
        <Route index element={<Main />} />
        <Route path="users" element={<Table />} />
        <Route path="users/create" element={<AddUserPopup />} />
        <Route path="users/:userId" element={<User />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export const App = AppComponent;
