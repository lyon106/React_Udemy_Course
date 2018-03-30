import React from 'react';
const Option = (props) => (
    <li> 
        Option: {props.optionText}
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}  
        >
            Remove
        </button> 
    </li>
);
export default Option;