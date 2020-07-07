import React from "react";
import Lnb from "../components/Lnb";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";

class ACSC03 extends React.Component {
  render() {
    return (
      <div>
        <Lnb title="Notice" column="Home - Notice" link="/" />
        <Rotate top left>
          <p>안녕하세요 1</p>
        </Rotate>

        <Zoom top>
          <p>안녕하세요 2</p>
        </Zoom>

        <Bounce>
          <p>안녕하세요 3</p>
        </Bounce>

        <Slide bottom>
          <p>안녕하세요 4</p>
        </Slide>

        <Roll left>
          <p>안녕하세요 5</p>
        </Roll>

        <LightSpeed right>
          <p>안녕하세요 6</p>
        </LightSpeed>
      </div>
    );
  }
}
export default ACSC03;
