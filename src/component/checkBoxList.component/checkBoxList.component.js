import React from "react";

function checkBoxList() {
  const checkList = [
    "position",
    "display",
    "border",
    "padding",
    "margin",
    "overflow",
    "background",
    "font",
    "text",
    "transform",
  ];

  const listItems = checkList.map((element) => (
    <li key={element}>
      <label>
        <input type="checkbox" />
        {element}
      </label>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default checkBoxList;
