import { JSX, memo } from 'react';
import styles from './Styles.module.scss';
import { Button } from '@/Components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <Button onClick={() => navigate('/login')}>
        Войти
      </Button>
    </header>
  );
};

export default Header;