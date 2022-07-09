import React from 'react';

import { smoothScrollHelper } from '../../helpers/helpers';

const RelativeLink = props => {
    const {targetID, children} = props;

    return <a href={`#${targetID}`} onClick={e => {e.preventDefault(); smoothScrollHelper(targetID);}}>{children}</a>;
};

export default RelativeLink;