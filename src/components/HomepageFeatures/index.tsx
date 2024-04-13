import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";

type FeatureItem = {
    title: string;
    Img: string;
    description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '好人帅哥',
        Img: "/img/haoren.png",
        description: (
            <>
                好人一生平安，一胎十娃
            </>
        ),
    },
    {
        title: '昊伟帅哥',
        Img: "/img/sg.png",
        description: (
            <>
                南昌暖男标杆，微信被妹子加爆
            </>
        ),
    },
    {
        title: 'author帅哥',
        Img: "/img/author.png",
        description: (
            <>
                失败的小丑，呜呜
            </>
        ),
    },
];

function Feature({title, Img, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={Img} alt=""/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div style={{justifyContent: "center"}} className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
