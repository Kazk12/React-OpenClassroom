import React from 'react'
import Sun from '../assets/images/sun.svg'
import Water from '../assets/images/water.svg'

function CareScale( {scaleValue, careType}) {
    const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)
	
		function handleClick(){
			if(careType === 'light'){
				if(scaleValue === 1){
					alert(`Cette plante requiert peu de lumière`)
				} else if (scaleValue === 2){
					alert(`Cette plante requiert modérement de la lumière`)
				} else {
					alert(`Cette plante requiert beaucoup de lumière`)
				}
				
			} else {
				if(scaleValue === 1){
					alert(`Cette plante requiert peu d'arrosage`)
				} else if (scaleValue === 2){
					alert(`Cette plante requiert modérement de l'arrosage`)
				} else {
				alert(`Cette plante requiert beaucoup d'arrosage`)
				}
			}
			
		}

	return (
		<div onClick={handleClick}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale