import React from 'react';

import PlanetDetails from './PlanetDetails'
import {Redirect} from 'react-router-dom';

const PlanetSearch = ({search,state,displayPlanetDetails,clearCharacterDetails,signOut}) => (
  <div className="search-container">
    {state.isValidUser ? <div>
        <p>Search your Star wars planet</p><input type="submit" value="Sign Out" onClick = {() =>signOut()}/>
            <input type="text" className="search-control" onChange = {(e) =>search(e.target.value)}/><br/><br/>
       <section className="results-section">
              {state.displayPlanetDetails ? 
                <PlanetDetails planet = {state.selectedPlanet} clearCharacterDetails = {clearCharacterDetails}/> : 
                <div>
              {state.planets.length !==0 ? state.planets.map(item => planet(item, displayPlanetDetails)) : <p>No Result Found</p>}
            </div>
          }
        </section>

    </div> : <Redirect to= '/login' />}
      </div>

  )

function planet(item,displayPlanetDetails) {
  return (
    <svg viewBox='0 0 130 130' onClick={() => displayPlanetDetails(item)} key={item.name}>
    <g>
  <circle cx='65' cy='65' r='45' fill='purple' />
  <text x="28" y="50" fontFamily="Verdana" fontSize="10" fill="white">{item.name}</text>
  </g>
</svg>
  )

}

export default PlanetSearch;
