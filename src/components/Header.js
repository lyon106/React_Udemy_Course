import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);
Header.defaultProps = {
    title: 'Indecision App', 
    subtitle:'Add few options from which you have to choose one, and let the app decide for you!'
};

export default Header; 