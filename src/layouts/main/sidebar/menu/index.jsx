import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "utils/consts";
import More from "./more";
import New from "./new";
export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink
          to={menu?.path}
          className="block -ml-2.5 py-[3px] group "
          key={index}
        >
          {({ isActive }) => (
            <div
              className={classNames(
                " inline-flex items-center opacity-90 tracking-wide group-hover:bg-[#eff3f41a] duration-300  gap-5 p-3  rounded-full",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notifications && (
                  <span className=" absolute h-[18px] w-[18px] text-[11px] bg-[#1d9bf0] rounded-full flex items-center justify-center -top-1 -right-0.5">
                    {menu?.notifications}
                  </span>
                )}
                {!isActive && menu?.icon.passive}
                {isActive && menu?.icon.active}
              </div>

              <div className="text-xl  pr-5">{menu?.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <New />
    </nav>
  );
}
