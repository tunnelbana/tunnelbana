import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { station, stations } from '../reducers/stations';

export class Connection extends React.Component {
  static propTypes = {
    connection: PropTypes.object,
    map: PropTypes.object,
  }

  render() {
    const from = {
      x: this.props.map.viewBox.width / 2
        + this.props.map.center.x
        + this.props.source.x,
      y: this.props.map.viewBox.height / 2
        + this.props.map.center.y
        + this.props.source.y,
    };

    const to = {
      x: this.props.map.viewBox.width / 2
        + this.props.map.center.x
        + this.props.destination.x,
      y: this.props.map.viewBox.height / 2
        + this.props.map.center.y
        + this.props.destination.y,
    };

    const d = 'M' + [from.x, from.y, to.x, to.y].join(' ');

    return (
      <path
        d={d}
        stroke={this.props.connection.color}
        strokeWidth="8"
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    map: state.map,
    source: station(state.stations, ownProps.connection.sourceId),
    destination: station(state.stations, ownProps.connection.destinationId),
  };
}

export default connect(mapStateToProps)(Connection);