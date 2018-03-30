import React from 'react';
import Option from './Option.js';  
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>You have {props.options.length} options:</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
            Remove All
            </button>
        </div>
        {props.options.length === 0 && <p>Please add an option to get started!</p>} 
        <ul>
            {
                props.options.map((option,index) => (
                    <Option  
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))  
            }
        </ul>
    </div>
);

export default Options;