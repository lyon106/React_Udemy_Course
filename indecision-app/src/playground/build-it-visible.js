const app = {
    title: 'Visibility Toggle',
    subtitle: 'Subtitle',
    options: []
};
let napis = "1";
const onMakeDecision = () => {
    if (app.options.length == 0) {
        app.options.push(napis);
        renderApp();
    } else {
        app.options = [];
        renderApp();
    }
}
const appRoot = document.getElementById('app');
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : undefined}
            <button onClick={onMakeDecision}>{app.options.length == 0 ? <p>Hide details</p> : <p>Show details</p>}</button>
            {app.options.length == 0 ? <p>What should I do?</p> : undefined}
        </div>
    );

    ReactDOM.render(template, appRoot);
}
renderApp();