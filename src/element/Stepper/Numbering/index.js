import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";
import "./index.scss";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {/* mapping KeysOfData untuk menerima list dan index*/}
        {KeysOfData.map((list, index) => {
          // isinya dari list dari yang diterima isinya current kasih kelas active
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          // list keadaan normal
          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
