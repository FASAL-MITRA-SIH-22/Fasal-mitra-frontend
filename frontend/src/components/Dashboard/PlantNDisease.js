import React from 'react';
import {Bar} from 'react-chartjs-2';

function PlantNDisease(props) {
  const {plantData, diseaseData} = props;

  return (
    <div>
        <Bar
          data={plantData}
          options={{
            title:{
              display:true,
              text:'Distribution of Plant Wise Detection',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <Bar
          data={diseaseData}
          options={{
            title:{
              display:true,
              text:'Distribution of Disease Wise Detection',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  );
}

export default PlantNDisease;