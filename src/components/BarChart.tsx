import React from 'react'
import {
  BarChart as BarCht, 
  Bar,
  XAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';

const data = [
  { name: 'cosmetic', income: 3353, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', income: 1221, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', income: 2850, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
  { name: 'food', income: 1880, pv: 2800, amt: 4000, bmk: 1500, time: 5, uvError: 100, pvError: 30 },
  { name: 'shirt', income: 1730, pv: 2800, amt: 4000, bmk: 1500, time: 6, uvError: 100, pvError: 30 },
  { name: 'pants', income: 1411, pv: 2800, amt: 4000, bmk: 1500, time: 7, uvError: 100, pvError: 30 },
  { name: 'drink', income: 1825, pv: 2800, amt: 4000, bmk: 1500, time: 8, uvError: 100, pvError: 30 },
  { name: 'service', income: 2891, pv: 2800, amt: 4000, bmk: 1500, time: 9, uvError: 100, pvError: 30 },
];


function BarChart() {
    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
             <BarCht data={data} maxBarSize={10} barSize={10}>
                <XAxis type="category" hide dataKey="name" />
                {/* <YAxis type="number" /> */}
                {/* <CartesianGrid horizontal={false} /> */}
                <Tooltip cursor={{strokeWidth: 0}} active={false} />
                <Bar dataKey="income" fill="#ffe3ab">
                     {
                        data.map((entry, index) => (
                          <Cell key={`cell-${index}`} stroke={'#facf7a'} strokeWidth={1}/>
                        ))
                      }
                </Bar>
                
            </BarCht>
        </ResponsiveContainer>
    )
}

export default BarChart
