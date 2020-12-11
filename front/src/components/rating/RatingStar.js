import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import axios from "axios";

export default function RatingStar(props) {
  let categoria = props.categoria;
  let url = "/omicron/usuarios/";
  let loadingStars = "Loading stars";
  let titleMsg = "Ratings";
  if (navigator.language.startsWith("es")) {
    loadingStars = "Cargando estrellas";
    titleMsg = "Calificaciones";
  }

  let data = [
    [
      "Calificación",
      "Personas",
      { role: "style" },
      "Relleno",
      { role: "style" },
    ],
    ["⭐⭐⭐⭐⭐", 0, "#6200EE", 10, "#e6d6ff"],
    ["⭐⭐⭐⭐", 0, "#6200EE", 10, "#e6d6ff"],
    ["⭐⭐⭐", 0, "#6200EE", 10, "#e6d6ff"],
    ["⭐⭐", 0, "#6200EE", 10, "#e6d6ff"],
    ["⭐", 0, "#6200EE", 10, "#e6d6ff"],
  ];

  const [dataRating, setDataRating] = useState(data);

  let content = <></>;

  if (dataRating) {
    console.log(dataRating);
    content = (
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="BarChart"
        loader={<div>{loadingStars}</div>}
        data={[
          [
            dataRating[0][0],
            dataRating[0][1],
            dataRating[0][2],
            dataRating[0][3],
          ],
          [
            dataRating[1][0],
            dataRating[1][1],
            dataRating[1][2],
            dataRating[1][3],
          ],
          [
            dataRating[2][0],
            dataRating[2][1],
            dataRating[2][2],
            dataRating[2][3],
          ],
          [
            dataRating[3][0],
            dataRating[3][1],
            dataRating[3][2],
            dataRating[3][3],
          ],
          [
            dataRating[4][0],
            dataRating[4][1],
            dataRating[4][2],
            dataRating[4][3],
          ],
          [
            dataRating[5][0],
            dataRating[5][1],
            dataRating[5][2],
            dataRating[5][3],
          ],
        ]}
        options={{
          title: titleMsg,
          chartArea: { width: "50%" },
          isStacked: true,
          legend: { position: "none" },
          hAxis: {
            minValue: 0,
          },
          colors: ["#6200EE", "#e6d6ff"],
          enableInteractivity: false,
        }}
      />
    );
  }

  useEffect(() => {
    if (!navigator.onLine) {
      if (sessionStorage.getItem("EstadisticasStar") === "") {
        setDataRating("Loading...");
      } else {
        setDataRating(JSON.parse(sessionStorage.getItem("EstadisticasStar")));
      }
    } else {
      axios.get(url).then((response) => {
        let users = response.data.filter((user) => user.role == categoria);
        let total = 0;
        users.forEach((user) => {
          if (user.rating === 5) data[1][1]++;
          else if (user.rating === 4) data[2][1]++;
          else if (user.rating === 3) data[3][1]++;
          else if (user.rating === 2) data[4][1]++;
          else if (user.rating === 1) data[5][1]++;

          total++;
        });
        let noFirst = false;
        data.forEach((datum) => {
          if (noFirst == false) {
            noFirst = true;
          } else {
            datum[3] = total - datum[1];
          }
        });
        setDataRating(data);
        sessionStorage.setItem("EstadisticasStar", JSON.stringify(data));
      });
    }
  }, []);

  return <>{content}</>;
}
