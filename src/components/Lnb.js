import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";

class Lnb extends React.Component {
  render() {
    return (
      <div className="Lnb">
        <div className="Lnb_title">
          <MenuBookIcon /> {this.props.title}
        </div>
        <div className="Lnb_column">
          <MenuBookIcon /> {this.props.column}
        </div>
      </div>
    );
  }
}

export default Lnb;
