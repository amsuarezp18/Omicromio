import React, { useState, useEffect, useContext } from "react";
import Chart from "react-google-charts";
import axios from "axios";

export default function Rating(props) {
  let categoria = props.categoria;
  let url = "/omicron/usuarios/";

  let data = [
    ['Calificación', 'Personas', {role:'style'}, 'Relleno', { role: 'style'}],
    ['5', 0, '#6200EE', 10, '#e6d6ff'],
    ['4', 0, '#6200EE', 10, '#e6d6ff'],
    ['3', 0, '#6200EE', 10, '#e6d6ff'],
    ['2', 0, '#6200EE', 10, '#e6d6ff'],
    ['1', 0, '#6200EE', 10, '#e6d6ff'],
  ]

  const [dataRating, setDataRating] = useState(data);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      let users = response.data.filter(user => user.role == categoria);
      let total = 0;
      users.forEach(user => {
          if (user.rating === 5) data[1][1]++;
          else if (user.rating === 4) data[2][1]++;
          else if (user.rating === 3) data[3][1]++;
          else if (user.rating === 2) data[4][1]++;
          else if (user.rating === 1) data[5][1]++;

          total++;
      })
      data.forEach(datum => {
          datum[3] = total - datum[1];
      })
      console.log(data);
      setDataRating(data);
      console.log(dataRating)
    })
  }, []);

  return (
    <>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Calificación', 'Personas', {role:'style'}, 'Relleno', { role: 'style'}],
            ['5', 9, '#6200EE', 1, '#e6d6ff'],
            ['4', 0, '#6200EE', 10, '#e6d6ff'],
            ['3', 0, '#6200EE', 10, '#e6d6ff'],
            ['2', 0, '#6200EE', 10, '#e6d6ff'],
            ['1', 0, '#6200EE', 10, '#e6d6ff'],
          ]}
        options={{
            title: 'Calificaciones de '+ categoria + 's',
            chartArea: { width: '50%' },
            isStacked: true,
            legend: { position: 'none' },
            hAxis: {
                minValue: 0
            },
            enableInteractivity: false
        }}

      />
    </>
  );
}
