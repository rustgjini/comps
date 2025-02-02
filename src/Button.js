import PropTypes from "prop-types";

function Button({
  children,
  className,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button className={className}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

      if(count >1) {
        return new Error('Only one primary, secondary, success, warning, danger can be true');
      }
  },
};

export default Button;
