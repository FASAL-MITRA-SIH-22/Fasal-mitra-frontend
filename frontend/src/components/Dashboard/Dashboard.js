import React, { useEffect, useState } from "react";
import Map from "./Map";
import axiosInstance from "../../axios.config";
import PlantNDisease from "./PlantNDisease";

function Dashboard() {
  const [mapData, setMapData] = useState([]);
  const [plantData, setPlantData] = useState([]);
  const [diseaseData, setDiseaseData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get("/dashboard");
      const data = res.data;
      setMapData(data.mapData);

      const plants = {
        labels: data.plantData.legends,
        datasets: [
          {
            label: 'Plant',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data.data.plantData.data
          }
        ]
      }

      const diseases = {
        labels: data.diseaseData.legends,
        datasets: [
          {
            label: 'Disease',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data.diseaseData.data
          }
        ]
      }

      setPlantData(plants);
      setDiseaseData(diseases);
    };

    getData();
  }, []);

  return (
    <div>
      <Map mapData={mapData} />
      <PlantNDisease plantData={plantData} diseaseData={diseaseData} />
    </div>
  );
}

export default Dashboard;
