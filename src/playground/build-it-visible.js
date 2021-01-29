const app = {
    title: 'Visibility Toggle',
    subtitle: 'Subtitle',
    options: []
};
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false 
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
            this.setState((prevState) => {
                return {
                    visibility: !prevState.visibility 
                };
            });
    };

    render() {
        return (
            <div> 
                <h1>{app.title}</h1>
                {app.subtitle ? <p>{app.subtitle}</p> : undefined} 
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? <p>Hide details</p> : <p>Show details</p>}</button>
                {this.state.visibility ? <p>What should I do?</p> : undefined}
            </div>
        )
    }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);