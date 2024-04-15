import React, { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] px-4 hover:bg-[#1a8cd8] transition-colors rounded-full items-center justify-center font-bold tracking-wide",
        {
          "h-9": size === "normal",
          "h-[52px] w-full text-[17px]  ": size === "large",
        }
      ),
    },
    children
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};
Button.defaultProps = {
  size: "normal",
};
