import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './LeftLinks.module.scss';

type LeftLinksComponentProps = {
  links: { name: string; link: string }[];
};

function LeftLinksComponent({ links }: LeftLinksComponentProps) {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.container__links}>
        {links.map(el => {
          const isActive = location.pathname === el.link;

          return (
            <Link
              key={el.link}
              to={el.link}
              className={`${styles.container__link} ${
                isActive ? styles.container__link_active : ''
              }`}
            >
              {el.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export const LeftLinks = memo(LeftLinksComponent);
