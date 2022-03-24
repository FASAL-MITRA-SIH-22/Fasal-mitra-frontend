import React, { useEffect, useState } from "react";
import Map from "./Map";
import {axiosInstance} from "../../axios.config";
import PlantNDisease from "./PlantNDisease";
import CustomBar from "./CustomBar";

function Dashboard() {
  const [mapData, setMapData] = useState([]);
  const [plantData, setPlantData] = useState(null);
  const [diseaseData, setDiseaseData] = useState(null);

  useEffect(() => {
    let componentMounted = true;

    const getData = async () => {
      const res = await axiosInstance.get("/dashboard");
      const data = res.data;
      if (!data) return;

      componentMounted && setMapData(data.mapData);
      
      componentMounted && setDiseaseData(data.diseaseData);
      componentMounted && setPlantData(data.plantData);
    };

    getData();

    return () => {
      componentMounted = false;
    };
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Outbreak Detection</h2>
      <Map mapData={mapData} />
      <br />
      <div className="grid grid-cols-2 gap-x-4">
      <CustomBar data={diseaseData} labelName="Disease" LegendName="Distribution of Disease Wise Detection" />
      <CustomBar data={plantData} labelName="Plant" LegendName="Distribution of Plant Wise Detection" />
      </div>
    </div>
  );
}

export default Dashboard;
