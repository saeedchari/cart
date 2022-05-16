import { string } from "prop-types";

const Alert = ({ color, className, children }) => {
  const classess = ["alert"];

  color && classess.push(`alert-${color}`);
  className && classess.push(className);

  return <div className={classess.join(" ")}>{children}</div>;
};

Alert.propTypes = {
  color: string,
  className: string,
};

Alert.defaultProps = {
  color: "danger",
};

export default Alert;
