import React from 'react';

import LinkList from '../../components/LinkList/LinkList';

const Home = () => {

    return <div className='scroll-page'>
        <p>Under construction...</p>
        <LinkList>
          <a href='#' onClick={e => e.preventDefault()}>I'm a Link!</a>
          <a href='#' onClick={e => e.preventDefault()}>I'm a Link!</a>
        </LinkList>
    </div>
}

export default Home;