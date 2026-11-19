import { Outlet } from 'react-router-dom';
import Header from '../../Widgets/Header';
import { LeftLinks } from '../../Widgets/LeftLinks';

const links = [
  { name: 'Главная', link: '/' },
  { name: 'Список студентов', link: '/users' },
  { name: 'Добавить студента', link: '/users/create' },
];

const OutletWrapper = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: '30% 70%', gap: '16px' }}>
        <LeftLinks links={links} />
        <Outlet />
      </div>
    </>
  );
};

export default OutletWrapper;
