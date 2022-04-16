import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import INDIA_TOPO_JSON from "./india.topo.json";

// const INDIA_TOPO_JSON =
//   "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";
// const INDIA_TOPO_JSON =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-districts.json";

const PROJECTION_CONFIG = {
  scale: 800,
  center: [75.9629, 17.5937],
};

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
  const { mapData } = props;
  const [tooltipContent, setTooltipContent] = useState("");

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(
        `${geo.properties.name}: ${current?.numberOfValue ?? "0"}`
      );
    };
  };

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
              const current = mapData.find((s) => s._id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? "red" : DEFAULT_COLOR}
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
