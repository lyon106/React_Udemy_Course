import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import IndecisionApp from './components/IndecisionApp.js';
 
ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );

// ReactDOM.render((
//     <Layout>
//         <div>
//             <p>This is inline</p>
//             <p>This is inline</p>
//         </div>
//     </Layout>
// ), document.getElementById('app'));

