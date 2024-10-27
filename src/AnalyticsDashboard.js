import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Button } from "./Button";

const barChartData = [
  {
    product: 'T-shirt',
    XS: 150,
    S: 200,
    M: 180,
    L: 100,
    XL: 150,
  },
  // ... other products
];

const TextileDashboard = () => {
  const [fullLineChartData, setFullLineChartData] = useState([]);

  // Fetch data when button is pressed
  const handleFetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders/get', {
        method: 'GET'
      });
      const data = await response.json();
      
        
      setFullLineChartData(data);
      console.log(fullLineChartData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" onClick={handleFetchData}>Fetch Data</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Raw Material Stock Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fullLineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  
                  {/* Use date for XAxis */}
                  <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Stock (m/m²/m³)', angle: -90, position: 'insideLeft', offset: 3 }} />
                  <Tooltip />
                  <Legend />

                  {/* Fixed Reference Line at 1960 */}
                  <ReferenceLine y={1960} label="Order Point" stroke="blue" strokeDasharray="3 3" />
                  {/* Fixed Reference Line at 1960 */}
                  <ReferenceLine y={1000} label="Security Stock" stroke="orange" strokeDasharray="3 3" />


                  <Line type="monotone" dataKey="algodao" stroke="#8884d8" name="Algodão" />
                  <Line type="monotone" dataKey="poliester" stroke="#82ca9d" name="Polyester" />
                  <Line type="monotone" dataKey="tecido" stroke="#ffc658" name="Tecido" />
                  <Line type="monotone" dataKey="fio" stroke="#ff8042" name="Fio" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Order Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="product" label={{ position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Orders ', angle: -90, position: 'insideLeft', offset: 3 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="XS" fill="#8884d8" name="XS" />
                  <Bar dataKey="S" fill="#82ca9d" name="S" />
                  <Bar dataKey="M" fill="#ffc658" name="M" />
                  <Bar dataKey="L" fill="#ff8042" name="L" />
                  <Bar dataKey="XL" fill="#e88be4" name="XL" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextileDashboard;