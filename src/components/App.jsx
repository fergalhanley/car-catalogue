import React, {Component} from 'react';
import Nav from './Nav.jsx';

class App extends Component {

    render() {
        return (
            <div>
                <Nav {...this.props} />
                {this.props.children}
            </div>
        );
    }
}

export default App;
