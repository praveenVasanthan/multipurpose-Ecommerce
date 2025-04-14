import React from "react";
import { useMatches } from "react-router-dom";

const index = () => {
  const matches = useMatches();

  const crumbs = matches
    .filter((match) => match.handle?.crumb)
    .map((match, index) => ({
      element: match.handle.crumb(match),
      key: index,
    }));

  return (
    <div className="tf-sp-1">
      <div className="container">
        <ul className="breakcrumbs">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.key}>
              <li>{crumb.element}</li>
              {index < crumbs.length - 1 && (
                <li className="d-flex align-items-center">
                  <i className="icon icon-arrow-right"></i>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
