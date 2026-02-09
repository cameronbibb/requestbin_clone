import { useState } from "react";
import "./HeadersAndQuery.css";

const HeadersAndQuery = ({ obj, type }) => {
  const array = Object.entries(obj);

  const [displayHeaders, setDisplayHeaders] = useState(false);

  const toggleHeaders = () => {
    setDisplayHeaders((prev) => !prev);
  };

  return (
    <div className="headers-and-query-container">
      <div className="headers-title">{type}</div>
      <div className="headers-headers">
        <div className="headers-toggle" onClick={toggleHeaders}>
          <span>{displayHeaders ? "▼" : "▶"}</span>({array.length}) headers
        </div>
        {displayHeaders && (
          <div className="headers-list">
            {array.map((nestedArr, idx) => {
              return (
                <div key={idx} className="header-row">
                  <div className="header-header">{nestedArr[0]}:</div>
                  <div className="header-value">{nestedArr[1]}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadersAndQuery;
