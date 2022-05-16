import PropTypes from "prop-types";

const Container = ({ className, children }) => {
  const classess = ["container"];

  className && classess.push(className);

  return <div className={classess.join(" ")}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
