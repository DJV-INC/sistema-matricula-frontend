import React from 'react'
import { YAxis, XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
const data = [
   {name: 'Janeiro', 'Alunos': 480}, 
   {name: 'Feveriro', "Alunos": 700},
   {name: 'Março', "Alunos": 500},
   {name: 'Abril', "Alunos": 340},
   {name: 'Maio', "Alunos": 230},
   {name: 'Junho', "Alunos": 180},
   {name: 'Julho', "Alunos": 280},
   {name: 'Agosto', "Alunos": 600},
   {name: 'Setembro', "Alunos": 200},
   {name: 'Outubro', "Alunos": 100},
   {name: 'Novembro', "Alunos": 80},
   {name: 'Dezembro', "Alunos": 50},
];




export default function GraficoLinha() {
  return (
      <ResponsiveContainer width="95%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}

          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="5 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Alunos" strokeWidth={2} stroke="#600a0a" fill="#ad1212" />
        </AreaChart>
      </ResponsiveContainer>
  )
}
