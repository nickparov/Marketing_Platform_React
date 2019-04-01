import React from 'react';

import { Link } from 'react-router-dom';

const PopularObject = (props) => {
  return (
    <Link to={`objects/${props.id}`}>
      <div className="team-box">
        <div className="team-img">
          <img alt={'Popular Object'} src={"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX21584383.jpg"} />
        </div>
        <div className="team-info">
          <h4 className="font-alt">{ props.country }</h4>
          <span>{ props.company }</span>
        </div>
      </div>
    </Link>
  )
}

export default PopularObject;
