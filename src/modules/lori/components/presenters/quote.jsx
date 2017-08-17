import React from 'react';
import cssModules from 'react-css-modules';
import env from 'env';
import styles from '../../styles/quote.scss';

var quote = ({body, author}) => {
    return (
        <div styleName='quote'>
            <p styleName='body'>{body}</p>
            <h5 styleName='author'>{'- '+author}</h5>
        </div>
    );
};

export default cssModules(quote, styles, env.cssModulesOptions);