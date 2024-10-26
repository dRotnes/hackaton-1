import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const lineChartData = [
  { date: '2024-01', algodao: 400, poliester: 300, tecido: 550, fio: 250 },
  { date: '2024-02', algodao: 500, poliester: 400, tecido: 450, fio: 300 },
  { date: '2024-03', algodao: 450, poliester: 350, tecido: 500, fio: 275 },
  { date: '2024-04', algodao: 470, poliester: 380, tecido: 520, fio: 290 },
];

const barChartData = [
  {
    product: 'T-shirt',
    P: 150,
    M: 200,
    G: 180,
    GG: 100,
  },
  {
    product: 'Calção',
    P: 120,
    M: 180,
    G: 150,
    GG: 80,
  },
  {
    product: 'Blusa',
    P: 90,
    M: 160,
    G: 140,
    GG: 70,
  },
  {
    product: 'Tênis',
    P: 100,
    M: 170,
    G: 160,
    GG: 90,
  },
];

const TextileDashboard = () => {
  const kpiValue = 15.7; // Example KPI value
  const isPositive = kpiValue > 0;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Textile Manufacturing Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Stock Level Line Chart */}
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Raw Material Stock Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="algodao" stroke="#8884d8" name="Algodão" />
                  <Line type="monotone" dataKey="poliester" stroke="#82ca9d" name="Poliéster" />
                  <Line type="monotone" dataKey="tecido" stroke="#ffc658" name="Tecido" />
                  <Line type="monotone" dataKey="fio" stroke="#ff8042" name="Fio" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Size Distribution Bar Chart */}
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Product Size Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="product" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="P" fill="#8884d8" name="P" />
                  <Bar dataKey="M" fill="#82ca9d" name="M" />
                  <Bar dataKey="G" fill="#ffc658" name="G" />
                  <Bar dataKey="GG" fill="#ff8042" name="GG" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* KPI Card */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-4xl font-bold">
                {kpiValue}%
              </div>
              {isPositive ? (
                <TrendingUp className="h-8 w-8 text-green-500" />
              ) : (
                <TrendingDown className="h-8 w-8 text-red-500" />
              )}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Compared to last month
            </p>
          </CardContent>
        </Card>

        {/* Empty Space for Future Implementation */}
        <Card>
          <CardHeader>
            <CardTitle>Future Implementation</CardTitle>
          </CardHeader>
          <CardContent className="h-40 flex items-center justify-center">
            <p className="text-muted-foreground">Space reserved for additional metrics</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextileDashboard;