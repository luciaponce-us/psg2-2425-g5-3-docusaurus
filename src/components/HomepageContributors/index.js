import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ContributorList = [
  {
    title: 'Javierluqueruiz',
    Image: require('@site/static/img/contributors/javier.png').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/Javierluqueruiz">
            Perfil de GitHub
          </Link>
        </div>
    ),
  },
  {
    title: 'lidiafc8',
    Image: require('@site/static/img/contributors/lidia.png').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/lidiafc8">
            Perfil de GitHub
          </Link>
        </div>
    ),
  },
  {
    title: 'luciaponce-us',
    Image: require('@site/static/img/contributors/lucia.jpeg').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/luciaponce-us">
            Perfil de GitHub
          </Link>
        </div>
    ),
  },
  {
    title: 'AdriRB03',
    Image: require('@site/static/img/contributors/adrian.png').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/AdriRB03">
            Perfil de GitHub
          </Link>
        </div>
    ),
  },
  {
    title: 'raquelortegaalmiron',
    Image: require('@site/static/img/contributors/raquel.png').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/raquelortegaalmiron">
            Perfil de GitHub
          </Link>
        </div>
    ),
  },
  {
    title: 'borvercas',
    Image: require('@site/static/img/contributors/borja.png').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/borvercas">
            Perfil de GitHub
          </Link>
        </div>
    ),
  },
];

function Contributor({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.contributor} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageContributors() {
  return (
    <section className={styles.contributors}>
      <div className="container">
        <div className="row">
          {ContributorList.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
