import React from 'react';

const Card = ({name, username, email, id,}) => {
  return (
    <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
      <img alt='robots' src={`https://robohash.org/${id}`}/>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{email}</p>
    </div>
    // it's not html it's jsx
  );
}

export default Card;
