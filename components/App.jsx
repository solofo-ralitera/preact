import {h, Component} from 'preact';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello...'
        };
    }

    render(props, state) {
        return <div>{ state.message }</div>
    }

}