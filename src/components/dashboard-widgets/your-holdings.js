import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList
} from "recharts";

import { market, sector } from '../../variables/dashboardvar'


const Widget3 = () => {
    return (
        <div className="container widget widget3">
            <div className='row head'>
                <div className='col-lg-6 left'>
                    <h2>Your Holdings</h2>
                </div>
                <div className='col-lg-6 right'><NavLink to="/" className="button1" >View Holding</NavLink></div>
            </div>
            <div className='body'>
                <h6>Market Cap</h6>
                <ResponsiveContainer height={69} width={"100%"}>
                    <BarChart
                        layout="vertical"
                        data={market}
                        stackOffset="expand"
                    >
                        <XAxis hide type="number" />
                        <YAxis hide
                            type="category"
                            dataKey="name"
                        />
                        <Bar dataKey="JUNIORBEES" fill="#3B5BA1" stackId="a" barSize={50}>
                            <LabelList dataKey="one" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                        <Bar dataKey="NIFTYBEES" fill="#C3D5B2" stackId="a" barSize={50}>
                            <LabelList dataKey="two" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                        <Bar dataKey="ICICILOVOL" fill="#A03398" stackId="a" barSize={50}>
                            <LabelList dataKey="three" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                        <Bar dataKey="ICICINXT50" fill="#603CB3" stackId="a" barSize={50}>
                            <LabelList dataKey="four" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                        <Bar dataKey="ICICINIF" fill="#4350B1" stackId="a" barSize={50}>
                            <LabelList dataKey="five" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                        <Bar dataKey="ICICIVIN" fill="#56BAD2" stackId="a" barSize={50}>
                            <LabelList dataKey="six" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                <br />
                <h6>Sectors</h6>
                <ResponsiveContainer height={69} width={"100%"}>
                    <BarChart
                        layout="vertical"
                        data={sector}
                        stackOffset="expand"
                    >
                        <XAxis hide type="number" />
                        <YAxis hide
                            type="category"
                            dataKey="name"
                        />
                        <Bar dataKey="DEBT" fill="#3B5BA1" stackId="a" barSize={50}>
                            <LabelList dataKey="one" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                        <Bar dataKey="EQUITY" fill="#56BAD2" stackId="a" barSize={50}>
                            <LabelList dataKey="two" fill={'white'} position="insideTopLeft" fontSize={12} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <NavLink to="/" className="button1 mobbutton d-block d-lg-none d-md-none" >View Holdings</NavLink>

            </div>

        </div>
    );
}
export default Widget3;