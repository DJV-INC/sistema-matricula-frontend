import React, { PureComponent, useEffect } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function GraficoLinha({data}){
    
    if (data.length > 0) {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Alunos" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cadastrados" fill="#470606" activeBar={<Rectangle fill="#ad1212" stroke="#470606" strokeWidth={3} />} />
            <Bar dataKey="matriculados" fill="#8f1516" activeBar={<Rectangle fill="#ff3314" stroke="#930c0c" strokeWidth={3}/>} />
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return ("Loading")
    }

    
}
