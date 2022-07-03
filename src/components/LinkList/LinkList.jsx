import React from "react";
import Styles from "./LinkList.module.scss";

import {ReactComponent as ArrowRight} from '../../icons/arrow-right.svg';

const LinkList = props => {
    const {children} = props;

    return <div className={Styles['linklist-container']}>
        {React.Children.map(children, link => <div className={Styles['linklist__link']}><ArrowRight />{link}</div>)}
    </div>
}

export default LinkList;