import React from "react";
import "./CustomInput.scss";

class CustomInput extends React.Component {
  render() {
    const { handleChange, label, ...otherInputProps } = this.props;
    return (
      <div className="custom-input-group">
        <input
          className="custom-input"
          onChange={handleChange}
          {...otherInputProps}
        />
        {label ? (
          <label
            className={`${
              otherInputProps.value.length ? "shrink" : ""
            } custom-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  }
}

export default CustomInput;
