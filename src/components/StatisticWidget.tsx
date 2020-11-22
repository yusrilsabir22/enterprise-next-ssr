import React from 'react'
import {AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'
import BarChart from './BarChart';

const data = [
     {
    name: 'Page A', uv: 100, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 149, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 189, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 196, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 262, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 281.90, pv: 3800, amt: 2500,
  },
]

const renderCustomizedActiveDot = (props: any) => {
  const { cx, cy, stroke, index, dataKey } = props;

  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={`dot-${dataKey}`}/>;
};

export type StatisticWidgetProps = {
  name?: string;
  income?: string;
  value?: string;
  strokeColor?: string;
  fillColor?: string;
  /**
   * S : Small |
   * L : Large |
   */
  width: "S" | "L";
  type: "BAR" | "LINE";
}

const StatisticWidget:React.FC<StatisticWidgetProps> = (props) => {
    return (
        <div className={`shadow-xl bg-white ${props.width === "S" ? "w-1/2" : "w-full"}`}>
            <div className="flex flex-row">
                <div className="w-2/5 z-30">
                    <div className="flex flex-col h-32 p-5">
                        <span className="flex-1 font-bold text-sm font-sans text-gray-500 items-start">{props.name ||'Sales'}</span>
                        <span className="flex-1 font-bold text-xl inline-text">{props.income || '$281.90'}</span>
                    </div>
                </div>
                {/* <div className="flex w-2/5 flex-col absolute p-5 items-center justify-center">
                  <div className="flex flex-1 items-center justify-center">
                    <AiFillCaretUp className="text-green-500 h-4 w-4"/>
                  </div>
                  <div className="flex-1">
                    <span className="text-green-500 font-sans">{props.value || '4.1%'}</span>
                  </div>
                </div> */}
                <div className={`w-full pr-1${props.width === "S" ? " grid place-items-end": ""}`}>
                  {
                    props.type === "LINE" ?
                    <ResponsiveContainer width={props.width === "S" ? '50%' : '100%'} height={'100%'} >
                        <AreaChart
                            data={data}
                            margin={{
                                top: 5, 
                                right: 0, 
                                left: 0, 
                                bottom: 5,
                            }}
                        >
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke={props.strokeColor || "#8884d8"} fill={props.fillColor || "#cecceb"} />
                        </AreaChart>
                    </ResponsiveContainer> : <BarChart/>
                  }
                    
                </div>
            </div>
        </div>
    )
}

export default StatisticWidget
