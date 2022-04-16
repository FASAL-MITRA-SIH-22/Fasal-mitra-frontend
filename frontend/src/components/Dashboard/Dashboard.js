import React, { useEffect, useState } from "react";
import Map from "./Map";
import { axiosInstance } from "../../axios.config";
import CustomBar from "./CustomBar";

const defaultMaps = [
  {
    _id: "MH",
    numberOfValue: 24,
  },
  // {
  //   _id: "GJ",
  //   numberOfValue: 4,
  // },
];

const defaultPlants = {
  legends: [
    "Corn_(maize)",
    "Tomato",
    "Potato",
    "Grape",
    "Pepper bell",
    "Strawberry",
    "Apple",
  ],
  data: [2, 5, 4, 1, 7, 1, 4],
};

const defaultDisease = {
  legends: [
    "Apple Black rot",
    "Apple scab",
    "Potato Early blight",
    "Grape Black rot",
    "Tomato Septoria leaf spot",
    "Tomato Target Spot",
    "Corn Common rust",
    "Strawberry Leaf scorch",
    "Pepper_bell Bacterial spot",
  ],
  data: [2, 2, 4, 1, 4, 1, 2, 1, 7],
};

function Dashboard() {
  const [mapData, setMapData] = useState(defaultMaps);
  const [plantData, setPlantData] = useState(defaultPlants);
  const [diseaseData, setDiseaseData] = useState(defaultDisease);

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
        <CustomBar
          data={diseaseData}
          labelName="Disease"
          legendName="Distribution of Disease Wise Detection"
        />
        <CustomBar
          data={plantData}
          labelName="Plant"
          legendName="Distribution of Plant Wise Detection"
        />
      </div>
    </div>
  );
}

export default Dashboard;
