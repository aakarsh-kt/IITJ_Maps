import React from "react";
import { AutoComplete, Button } from "antd";
import options from "./options";
export default function () {
  return (
    <div>
      <AutoComplete className="auto" options={options} />
      <h3>From</h3>
      <AutoComplete className="auto" options={options} />
      <h3>To</h3>
      <Button type="primary">Search</Button>
    </div>
  );
}
