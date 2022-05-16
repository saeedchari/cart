import { string, func } from "prop-types";

const Input = ({ type, name, value, onChange, placeholder, className }) => {
  const classess = ["form-control"];

  className && classess.push(className);

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classess.join(" ")}
    />
  );
};

Input.propTypes = {
  type: string,
  name: string,
  value: string,
  onChange: func,
  placeholder: string,
  className: string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
