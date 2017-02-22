
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectModel } from '../actions/car-actions';


class Details extends Component {

    static propTypes = {
        selectedModel: PropTypes.object.isRequired,
    };

    componentDidMount(){
        this.props.dispatch(selectModel(this.props.params.id))
    }

    render() {
        return (
            <div>
                <h1>The Car Of Your Dreams</h1>
                <div className="car-details">
                    <div><img src={this.props.selectedModel.imageUrl}/></div>
                    <p>{this.props.selectedModel.makeName} {this.props.selectedModel.name} - ${this.props.selectedModel.price}</p>
                </div>
            </div>
        );
    }
}

const mapProps = state => {
    return {
        selectedModel: state.car.selectedModel,
    };
};

export default connect(mapProps)(Details);
