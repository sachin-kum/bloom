import React from 'react'
import { NavLink } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {SECTORS, COLORS } from '../../variables/reportfamilyvar'


  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


const WidgetRP3 = () => {
    return ( 
        <div className="container widget reports-widget3">
            <div className='row'>
            <div className='col-lg-5'>
                <div className='reports-mands rp-market'>
                    <h2>Sectors</h2>
                    <div className='rp-border'></div>
                    <ResponsiveContainer height={250} width={"100%"} className="d-none d-lg-block d-md-block" >
                        <PieChart width={200} height={250}>
                            <Pie
                                data={SECTORS}
                                cx={230}
                                cy={100}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {SECTORS.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer height={250} width={"100%"} className="d-block d-lg-none d-md-none" >
                        <PieChart width={200} height={250}>
                            <Pie
                                data={SECTORS}
                                cx={100}
                                cy={100}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {SECTORS.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className='rpsandh-legend'>
                        <div className='row'>
                            <div className='col-6 left'><div style={{background: "#7BC8FF"}}></div><h3>Technology</h3></div>
                            <div className='col-6 right text-end'><h3>₹40,000</h3></div>
                        </div>
                        <div className='row'>
                            <div className='col-6 left'><div style={{background: "#FFF38A"}}></div><h3>Technology</h3></div>
                            <div className='col-6 right text-end'><h3>₹40,000</h3></div>
                        </div>
                        <div className='row'>
                            <div className='col-6 left'><div style={{background: "#D4BFFF"}}></div><h3>Technology</h3></div>
                            <div className='col-6 right text-end'><h3>₹40,000</h3></div>
                        </div>
                        <div className='row'>
                            <div className='col-6 left'><div style={{background: "#FF9E99"}}></div><h3>Technology</h3></div>
                            <div className='col-6 right text-end'><h3>₹40,000</h3></div>
                        </div>
                        <div className='row'>
                            <div className='col-6 left'><div style={{background: "#FFD17B"}}></div><h3>Technology</h3></div>
                            <div className='col-6 right text-end'><h3>₹40,000</h3></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-7'>
                <div className='rp-holdings'>
                    <div className='rpholdingshead'>
                    <div className='row'>
                        <h2 className='col-lg-6'>Holdings</h2>
                        <div className='col-lg-6 text-end'>
                        <NavLink to="#" className="button1" >Download</NavLink> 
                        </div>
                    </div>
                    </div>
                    <table className='d-none d-lg-table'>
                <tr className='table-head'>
                    <th>Stock Name</th>
                    <th>ISIN</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                <tr>
                    <td>NIFTYBEES</td>
                    <td>INF204KB14I2</td>
                    <td>1197.0</td>
                    <td>184.07</td>
                    <td>220331.79</td>
                </tr>
                    </table>
                    <div className='body w4-m-body d-block d-lg-none'>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='mob-table-parent'>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Stock Name</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>NIFTYBEES</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>ISIN</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>INF204KB14I2</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Quantity</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>1197.0</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Rate</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>184.07</p>
                                </div>
                            </div>
                            </div>
                            <div className='mob-table'>
                            <div className='row'>
                                <div className='col-6 left'>
                                    <h6>Value</h6>
                                </div>
                                <div className='col-6 right'>
                                    <p>220331.79</p>
                                </div>
                            </div>
                            </div>
                        </div>
                     </div>
                    
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default WidgetRP3;