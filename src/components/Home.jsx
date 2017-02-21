
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    static propTypes = {
        carOfTheWeek: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="home-page">
                <h1>Fergal's Fantastic Car Catalogue</h1>
                <div className="car-of-the-week">
                    <h2>Car Of The Week: { this.props.carOfTheWeek.makeName } { this.props.carOfTheWeek.modelName }</h2>
                    <div className="review">
                        <div>
                            <img src={this.props.carOfTheWeek.imageUrl}/>
                        </div>
                        <p>
                            <strong>Price ${ this.props.carOfTheWeek.price } </strong><br/>
                            { this.props.carOfTheWeek.review }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapProps = state => {

    return {
        carOfTheWeek: state.car.carOfTheWeek,
    }
};

export default connect(mapProps)(Home);
