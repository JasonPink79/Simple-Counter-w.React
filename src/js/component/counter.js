import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export function SimpleCounter(props) {
	return (
		<div className="counter d-flex flex-row">
			<FontAwesomeIcon icon={faClock} />
			<div className="digit">{props.four % 10}</div>
			<div className="digit">{props.three % 10}</div>
			<div className="digit">{props.two % 10}</div>
			<div className="digit">{props.one % 10}</div>
		</div>
	);
}

SimpleCounter.defaultProps = {
	one: 0,
	two: 0,
	three: 0,
	four: 0
};

SimpleCounter.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number
};
