import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function Addcolor() {
  // const color="red";
  const [color, setColor] = useState("red");
  // const colorList=["skyblue","green","yellow"];
  const [colorList, setColorList] = useState(["skyblue", "green", "yellow"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div className="colorism">
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color} />
        <button onClick={() => setColorList([...colorList, color])}>Add color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
