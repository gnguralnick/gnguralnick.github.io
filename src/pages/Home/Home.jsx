import React from 'react';

import LinkList from '../../components/LinkList/LinkList';
import RelativeLink from '../../components/RelativeLink/RelativeLink';
import profile from '../../images/profile.jpeg';

import Styles from './Home.module.scss';

const Home = () => {

    return <section className={'scroll-page ' + Styles['home']} id='home'>
        <div>
            <h1>Gabriel Guralnick</h1>
            <LinkList className={Styles['links']}>
                <RelativeLink targetID='about'>about me</RelativeLink>
                <RelativeLink targetID='projects'>my projects</RelativeLink>
            </LinkList>
        </div>
        <img src={profile} alt='A picture of me' />
        <div className={Styles['contact']}>

        </div>
    </section>
}

export default Home;