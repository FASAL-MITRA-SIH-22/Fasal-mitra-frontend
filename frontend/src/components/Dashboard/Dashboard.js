import React, { useEffect, useState, useRef } from "react";
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
    <>
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
      <div>
        <div>
          <div className="grid grid-rows-6 grid-flow-col">
            <div className="col-span-12 row-span-1 bg-slate-700 rounded-xl m-2 shadow-xl p-4 flex items-center justify-start gap-2">
              <div className=" bg-white h-full w-1/6">
                <p>Total Visitors</p>
                <p>

                </p>

              </div>
              <div className="bg-white h-full w-1/6">

              </div>
              <div className="bg-white h-full w-1/6">
              </div>
              <div className="bg-white h-full w-1/6">
              </div>
              <div>
              </div>
            </div>
            <div className="row-span-5 col-span-12 ... bg-red-700 rounded-xl m-2 shadow-xl grid grid-rows-6 grid-flow-col">
              <div className="row-span-6 col-span-4 ... bg-slate-700 rounded-xl m-2 shadow-xl p-4 py-8">

              </div>
              <div className="row-span-6 col-span-4 ... bg-slate-700 rounded-xl m-2 shadow-xl p-4">
              </div>
              <div className="row-span-2 col-span-4 ... bg-slate-700 rounded-xl m-2 shadow-xl">
                <Map mapData={mapData} />
              </div>
              <div className="row-span-2 col-span-4 ... bg-slate-700 rounded-xl m-2 shadow-xl p-4 flex items-center justify-center">
                <CustomBar
                  data={diseaseData}
                  labelName="Disease"
                  legendName="Distribution of Disease Wise Detection"
                />
              </div>
              <div className="row-span-2 col-span-4 ... bg-slate-700 rounded-xl m-2 shadow-xl p-4 flex items-center justify-center">
                <CustomBar
                  data={plantData}
                  labelName="Plant"
                  legendName="Distribution of Plant Wise Detection"
                />
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
