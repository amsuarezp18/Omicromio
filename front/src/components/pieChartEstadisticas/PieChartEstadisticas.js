import React from "react";
import Chart from "react-google-charts";
import noStats from "../../assets/images/pocoyo.png";

export default function PieChartEstadisticas(props) {
  let data1 = [props.param1, props.data1];
  let data2 = [props.param2, props.data2];
  let data3 = [props.param3, props.data3];
  let data4 = [props.param4, props.data4];
  let nombre = props.nombre;
  let categoria = props.categoria;

  let loadingChart = "Loading chart";
  let noData = "Not enough information";
  if (navigator.language.startsWith("es")) {
    loadingChart = "Cargando gráfica";
    noData = "No hay suficiente información";
  }

  return (
    <>
      {data1[1] === 0 && data2[1] === 0 && data3[1] === 0 && data4[1] === 0 ? (
        <div>
          <img
            src={noStats}
            alt={noData}
            width={"120px"}
            className="align-self-center mb-3"
          />
          <br></br>
          <p>{noData}</p>
        </div>
      ) : (
        <Chart
          width={"400px"}
          height={"250px"}
          chartType="PieChart"
          loader={<div>{loadingChart}</div>}
          data={[[nombre, categoria], data1, data2, data3, data4]}
          rootProps={{ "data-testid": "1" }}
        />
      )}
    </>
  );
}
