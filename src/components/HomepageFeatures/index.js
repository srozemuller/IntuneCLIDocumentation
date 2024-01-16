import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting started',
    Svg: require('@site/static/img/undraw_outer_space_re_u9vd.svg').default,
    description: (
      <>
        The IntuneCli is designed to easy get Intune in control from an automation perspective. Go the <code><a href="/docs/getting-started" target="_blank">get started page</a></code> to start quickly.
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_education_f8ru.svg').default,
    description: (
      <>
       The IntuneCli has a lot of options. All needed information to use the IntuneCli is stored under the <code><a href="/docs/getting-started" target="_blank">documentation</a></code> directory.
      </>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Feel free to collaborate with this project. The project is stored in <code><a href="https://github.com/srozemuller/IntuneAssistant" target="_blank">GitHub</a></code>. Just add new features using the <code><a href="https://github.com/srozemuller/IntuneAssistant/issues/new/choose" target="_blank">Issues</a></code> page.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
