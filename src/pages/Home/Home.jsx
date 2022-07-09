import React from 'react';

import LinkList from '../../components/LinkList/LinkList';
import RelativeLink from '../../components/RelativeLink/RelativeLink';

import images from '../../images/images';

import Styles from './Home.module.scss';

const Home = () => {

    return <section className={'scroll-page ' + Styles['home']} id='home'>
        <div className={Styles['content']}>
            <h1>Gabriel Guralnick</h1>
            <h2>Software Developer</h2>
            <div className={Styles['links']}>
                <LinkList>
                    <RelativeLink targetID='about'>about me</RelativeLink>
                    <RelativeLink targetID='projects'>my projects</RelativeLink>
                </LinkList>
            </div>
            <div className={Styles['contact']}>
                <a href='https://github.com/gnguralnick'><img src={images.github} alt='Find me on Github' /></a>
                <a href='https://www.linkedin.com/in/gabriel-guralnick/'><img src={images.linkedin} alt='Connect on LinkedIn' /></a>
                <a href='mailto:gnguralnick@gmail.com'><img src={images.email} alt='Send me an email' /></a>
                <a href='https://www.facebook.com/gabriel.guralnick'><img src={images.facebook} alt='Find me on Facebook' /></a>
            </div>
        </div>
        <div className={Styles['profile']}>
            <img src={images.profile} alt='A picture of me' />
        </div>

    </section>
}

export default Home;