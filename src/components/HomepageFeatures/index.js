import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '从向量到空间',
    Svg: require('@site/static/images/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        系统掌握线性代数核心概念：向量、矩阵、线性组合、子空间、基与维度、特征值与特征向量。
        
        一切从几何直觉出发，告别抽象符号迷雾。
      </>
    ),
  },
  {
    title: '通可视化驱动理解',
    Svg: require('@site/static/images/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        通过交互式 3D 图形直观理解矩阵变换、行列式、秩、正交投影与奇异值分解。

        看得见的线性代数，让抽象变得具体。
      </>
    ),
  },
  {
    title: '无缝衔接应用领域',
    Svg: require('@site/static/images/undraw_docusaurus_react.svg').default,
    description: (
      <>
        无 DRM 限制，支持所有主流格式：

        PDF（Mac/PC）、HTML 交互版、Jupyter Notebook 源码。

        直接用于机器学习、计算机图形学与数据科学项目。
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
