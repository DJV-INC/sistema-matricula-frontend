import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

export default function GraficoPizza({data}){
  
  console.log(data);

  if (data.length > 0) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#ad1212"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  } else {
    return ("Loading")
  }
}
