
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

class Search extends Component {

    static propTypes = {
        makes: PropTypes.array.isRequired,
        models: PropTypes.array.isRequired,
    };

    handleSelectMake(e) {
        e.persist();
        this.setState( state => {
            const makeId = parseInt(e.target.value);
            state.makeId = makeId;
            state.modelId = _.find(this.props.models, {makeId: makeId}).id
        });
    }

    handleSelectModel(e){
        e.persist();
        this.setState( state => state.modelId = parseInt(e.target.value) );
    }

    constructor(){
        super();
        this.state = {
            makeId: 10,
            modelId: 100,
        };
    }

    render() {
        return (
            <div>
                <h1>Find The Car Of Your Dreams</h1>
                <div className="search-page">
                    <div>
                        <select onChange={this.handleSelectMake.bind(this)} defaultValue={this.state.makeId}>
                            { this.props.makes.map( (make, i) =>
                                <option key={i} value={make.id}>{make.name}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <select onChange={this.handleSelectModel.bind(this)} defaultValue={this.state.modelId}>
                            { this.props.models
                                .filter( model => model.makeId === this.state.makeId )
                                .map( (model, i) =>
                                    <option key={i} value={model.id}>{model.name}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <Link className="link-button"
                              to={`/make/model/${this.state.modelId}`}>
                            Find
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapProps = state => {
    return {
        makes: state.car.makes,
        models: state.car.models,
    };
};

export default connect(mapProps)(Search);
