import React from 'react';
import Option from './Option.js';  
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>} 
            <h3>You have {props.options.length} options:</h3>
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
};

export default Options;