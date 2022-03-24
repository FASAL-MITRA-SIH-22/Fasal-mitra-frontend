import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { scaleQuantile } from "d3-scale";

const INDIA_TOPO_JSON =
  "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";
// const INDIA_TOPO_JSON =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-districts.json";

const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};

const data = [{ id: "AP", state: "Andhra Pradesh", value: getRandomInt() }];

const PROJECTION_CONFIG = {
  scale: 800,
  center: [75.9629, 17.5937] 
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

function Map(props) {
  const { mapData} = props;
  const [tooltipContent, setTooltipContent] = useState("");

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const colorScale = scaleQuantile()
    .domain(mapData.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="mt-5">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={window.innerWidth}
        height={700}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = mapData.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default Map;
