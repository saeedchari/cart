import PropTypes from "prop-types";

const Col = ({ xs, sm, md, lg, xl, xxl, className, children }) => {
  const classess = [];

  xs && classess.push(`col-${xs}`);
  sm && classess.push(`col-sm-${sm}`);
  md && classess.push(`col-md-${md}`);
  lg && classess.push(`col-lg-${lg}`);
  xl && classess.push(`col-xl-${xl}`);
  xxl && classess.push(`col-xxl-${xxl}`);
  className && classess.push(className);

  return <div className={classess.join(" ")}>{children}</div>;
};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
  className: PropTypes.string,
};

export default Col;
