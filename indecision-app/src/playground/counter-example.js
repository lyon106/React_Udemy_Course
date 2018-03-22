const appRoot = document.getElementById('app');

//templateThird
let count = 0;
const someId = 'myID';
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}






const renderCounterApp = () => {
    const templateThird = ( //elementy JSX nie reagują na zmianę danych - ReactDOM renderuje się przed zmianą danych
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id={someId} className="button">+1</button> 
            <button onClick={minusOne} id={someId} className="button">-1</button> 
            <button onClick={reset} id={someId} className="button">reset</button> 
        </div>
    );
    ReactDOM.render(templateThird, appRoot);
}
renderCounterApp();