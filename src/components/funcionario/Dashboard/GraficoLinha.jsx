import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export default function GraficoLinha({label = false, dados = false}) {
   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agosto', "Setembro", 'Outubro', "Novembro", "Dezembro"];

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: 'top',
         },
         title: {
            display: true,
            text: 'Alunos Matriculados nos ultimos 365 dias',
         },
      },
   };

   const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Alunos Matriculados',
          data: dados || labels.map(() => parseInt(Math.random(1) * 1000)) ,
          borderColor: '#410809',
          backgroundColor: '#8f1516',
        },
      ],
    };

   return <Line options={options} data={data} width="100px" height="100px"/>;
}