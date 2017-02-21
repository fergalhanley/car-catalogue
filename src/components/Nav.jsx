
import React, {Component} from 'react';
import { Link } from 'react-router';
import { ROUTES } from '../core/routes';


class App extends Component {

    render() {
        return (
            <div className="flex-row" >
                { this.props.location.pathname !== ROUTES.HOME &&
                    <Link className="link-button" to={ROUTES.HOME}>Home</Link>
                }
                { this.props.location.pathname !== ROUTES.SEARCH &&
                    <Link className="link-button" to={ROUTES.SEARCH}>Search</Link>
                }
            </div>
        );
    }
}

export default App;
