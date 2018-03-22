console.log('App.js is running');
//$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
const app = {
    title: 'Tytuł',
    subtitle: 'Podtytuł',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};
const removeAll = () => {
    app.options = [];
    renderApp();
}

const appRoot = document.getElementById('app');

const numbers = [22,33,55];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}
const onRemoveAll = () => {

};
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : undefined}
            <p>Here are your options: {app.options.length > 0 ? app.options : 'no options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>  
            <button onClick={onRemoveAll}>Remove All</button>  
            <ol>
                {
                    app.options.map((iteam,index) => <li key={index}> {iteam} </li>)
                } 
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All</button> 
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
renderApp();


