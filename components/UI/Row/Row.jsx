import PropTypes from "prop-types";

const Row = ({ className, children }) => {
  const classess = ["row"];

  className && classess.push(className);

  return <div className={classess.join(" ")}>{children}</div>;
};

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
