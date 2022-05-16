import { string, func } from "prop-types";
import Link from "next/link";

const Button = ({color, className, type, onClick, link, children}) => {
  const classess = ["btn"];

  color && classess.push(`btn-${color}`);
  className && classess.push(className);

  let element = (
    <button type={type} className={classess.join(" ")} onClick={onClick}>
      {children}
    </button>
  );

  if (link) {
    element = (
      <Link href={link}>
        <a className={classess.join(" ")}>{children}</a>
      </Link>
    );
  }

  return element;
};

Button.propTypes = {
  color: string,
  className: string,
  type: string,
  onClick: func,
  link: string,
};

Button.defaultProps = {
  color: "success",
  type: "button",
};

export default Button;
