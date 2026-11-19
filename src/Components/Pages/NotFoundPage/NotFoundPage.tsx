
import { JSX, memo } from 'react';
import styles from './Styles.module.scss';
import { Link } from 'react-router-dom';

function NotFoundPageComponent(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>404 Error</h2>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export const NotFoundPage = memo(NotFoundPageComponent);
