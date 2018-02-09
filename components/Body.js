const React = require("react");
const PropTypes = require("prop-types");
const { connect } = require("react-redux");

//const cube = require("../geometry/cube").default;
//const actions = require("../actions").default;
//const select = require("../reducers").selectors;

export class Body extends React.PureComponent {
  static propTypes = {
    frame: PropTypes.string,
  };

  static defaultProps = {
    frame: "minus-x-1",
  };


  render() {
    const text = {
      transform: [
        `scale(1.6)`,
        `translate(${-13}, ${2})`,
      ].join(" ")
    };

    const transform = `translate(${-20}, ${-52})`;

    return (
      <g className="Body" fill="#d8d8d8" stroke="#979797" transform={transform}>
        <defs>

          <g id="minus-x-1">
            <ellipse id="Leg" cx="14.0999999" cy="62.3875" rx="3.0999999" ry="6.3875"></ellipse>
            <ellipse id="Body" cx="23" cy="52.0125" rx="17.48" ry="17.3375"></ellipse>
            <ellipse id="Leg" transform="translate(26.944607, 65.033613) rotate(13.000000) translate(-26.944607, -65.033613) " cx="26.944607" cy="65.0336126" rx="3.5999999" ry="6.3875"></ellipse>
            <ellipse id="Leg" transform="translate(28.725425, 51.598577) scale(-1, 1) rotate(18.000000) translate(-28.725425, -51.598577) " cx="28.7254245" cy="51.5985773" rx="4.0999999" ry="6.3875"></ellipse>
            <ellipse id="Head" cx="23" cy="23.1" rx="23" ry="22.8125"></ellipse>
            <text key="Face" x="12" y="25.2" fontSize={29} {...text}>😎</text>
          </g>

          <g id="minus-x-2">
            <ellipse id="Leg" transform="translate(13.022243, 61.583997) rotate(35.000000) translate(-13.022243, -61.583997) " cx="13.0222428" cy="61.583997" rx="4.0999999" ry="6.3875"></ellipse>
            <ellipse id="Body" cx="23" cy="50.99" rx="17.48" ry="17.3375"></ellipse>
            <ellipse id="Leg" transform="translate(30.730661, 63.270971) rotate(-22.000000) translate(-30.730661, -63.270971) " cx="30.7306614" cy="63.2709706" rx="3.5999999" ry="6.3875"></ellipse>
            <ellipse id="Leg" transform="translate(29.225425, 51.598577) scale(-1, 1) rotate(-29.000000) translate(-29.225425, -51.598577) " cx="29.2254246" cy="51.5985773" rx="4.6" ry="6.3875"></ellipse>
            <ellipse id="Head" cx="23" cy="22.8125" rx="23" ry="22.8125"></ellipse>
            <text key="Face" x="12" y="25" fontSize={29} {...text}>😎</text>
          </g>

          <g id="minus-y-1">
            <use href="#minus-x-1" transform="scale(-1, 1) translate(-45, 0)" />
          </g>

          <g id="minus-y-2">
            <use href="#minus-x-2" transform="scale(-1, 1) translate(-45, 0)" />
          </g>

        </defs>

        <use href={`#${this.props.frame}`} />
      </g>
    );
  }
}

const mapStateToProps = (state) => {
  //const station = select("stations").from(state).byId(id);
  //const hexagon = select("hexagons").from(state).byId(station.get("hexagonId"));
  //const terrain = select("terrains").from(state).byId(hexagon.get("terrainId"));
  return {};
};

export default connect(mapStateToProps)(Body);
