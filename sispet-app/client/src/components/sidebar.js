import React from "react";
import "../App.css";
import { sidebarData } from "./sidebarData.js";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebarLista">
                {sidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            onClick = {() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div>{val.icons} {val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;