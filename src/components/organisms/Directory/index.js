import React from "react";
import { sections } from "../../../data/MenuItemData";
import MenuItem from "../../molecules/MenuItem";
import "./Directory.scss";

class Directory extends React.Component {
  state = {
    sections
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections &&
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
      </div>
    );
  }
}

export default Directory;
