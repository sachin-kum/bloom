import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {rpmarket, rpmarketcolors, rpsector, rpsectorcolors} from '../../variables/reportpersonalvar'





const WidgetRP2 = () => {
    return ( 
        <div className="container widget reports-widget2">
           <div className='row'>
            <div className='col-lg-6'>
                <div className='reports-mands rp-market'>
                    <h2>Market Cap</h2>
                    <div className='rp-border'></div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <ResponsiveContainer height={200} width={"100%"}>
                                <PieChart width={800} height={100}>
                                    <Pie
                                        data={rpmarket}
                                        cx={100}
                                        cy={100}
                                        innerRadius={50}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {rpmarket.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={rpmarketcolors[index % rpmarketcolors.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='col-lg-6 rpw2legend'>
                            <ul>
                                <li className="rpw2stc"><div style={{background: "#0088FE"}}></div>Nifty Bank</li>
                                <li className="rpw2stc"><div style={{background: "#00C49F"}}></div>Nifty Next 50</li>
                                <li className="rpw2stc"><div style={{background: "#FFBB28"}}></div>Nifty Midcap 100</li>
                                <li className="rpw2stc"><div style={{background: "#FF8042"}}></div>SENSEX</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='reports-mands rp-market rp-s-m'>
                    <h2>Sectors</h2>
                    <div className='rp-border'></div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <ResponsiveContainer height={200} width={"100%"}>
                                <PieChart width={800} height={100}>
                                    <Pie
                                        data={rpsector}
                                        cx={100}
                                        cy={100}
                                        innerRadius={50}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {rpsector.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={rpsectorcolors[index % rpsectorcolors.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='col-lg-6 rpw2legend'>
                            <ul>
                                <li className="rpw2stc"><div style={{background: "#50519B"}}></div>Large Cap</li>
                                <li className="rpw2stc"><div style={{background: "#B6B6D5"}}></div>Mid Cap</li>
                                <li className="rpw2stc"><div style={{background: "#516DAB"}}></div>Small Cap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default WidgetRP2;