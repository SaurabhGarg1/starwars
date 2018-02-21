import React from 'react';

export default ({ planet, clearCharacterDetails}) =>
<section className="character-details">
  <h2 className="character-details__header">{planet.name}</h2>
  <div className="character-details__clear" onClick = {clearCharacterDetails}>X</div>
  <div className="character-details__sections">
    <div className="character-details__detail">Created On: {planet.created}</div>
    <div className="character-details__detail">Population: {planet.population}</div>
    <div className="character-details__detail">Diameter: {planet.diameter}</div>
    <div className="character-details__detail">Climate: {planet.climate}</div>
  </div>
</section>