import React, { useState } from 'react';  // Add useState here
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Button, buttonVariants, getButtonVariants } from "./Button";
import { format } from 'date-fns';

// Extended dataset with more dates
const fullLineChartData = [
  { date: '2024-01', algodao: 400, poliester: 300, tecido: 550, fio: 250 },
  { date: '2024-02', algodao: 500, poliester: 400, tecido: 450, fio: 300 },
  { date: '2024-03', algodao: 450, poliester: 350, tecido: 500, fio: 275 },
  { date: '2024-04', algodao: 470, poliester: 380, tecido: 520, fio: 290 },
  { date: '2024-05', algodao: 520, poliester: 410, tecido: 580, fio: 310 },
  { date: '2024-06', algodao: 480, poliester: 390, tecido: 530, fio: 285 }
];

const barChartData = [
  {
    product: 'T-shirt',
    XS: 150,
    S: 200,
    M: 180,
    L: 100,
    XL: 150,
  },
  {
    product: 'Calções',
    XS: 150,
    S: 200,
    M: 180,
    L: 100,
    XL: 150,
  },
  {
    product: 'Camisola',
    XS: 150,
    S: 140,
    M: 18,
    L: 10,
    XL: 150,
  },
  {
    product: 'Calças',
    XS: 150,
    S: 20,
    M: 40,
    L: 100,
    XL: 100,
  },
];

const TextileDashboard = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date('2024-01-01'),
    to: new Date('2024-06-01')
  });

  // Filter line chart data based on date range
  const filteredLineChartData = fullLineChartData.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= dateRange.from && itemDate <= dateRange.to;
  });

  // Calculate KPI (growth rate) based on filtered data
  const calculateGrowthRate = () => {
    if (filteredLineChartData.length < 2) return 0;
    
    const latest = filteredLineChartData[filteredLineChartData.length - 1];
    const previous = filteredLineChartData[filteredLineChartData.length - 2];
    
    // Calculate total materials for each month
    const latestTotal = latest.algodao + latest.poliester + latest.tecido + latest.fio;
    const previousTotal = previous.algodao + previous.poliester + previous.tecido + previous.fio;
    
    return Number(((latestTotal - previousTotal) / previousTotal * 100).toFixed(1));
  };

  const kpiValue = calculateGrowthRate();
  const isPositive = kpiValue > 0;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                {format(dateRange.from, 'LLL dd, y')} - {format(dateRange.to, 'LLL dd, y')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={{ from: dateRange.from, to: dateRange.to }}
                onSelect={(range) => range && setDateRange(range)}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Stock Level Line Chart */}
<Card className="col-span-2 lg:col-span-1">
  <CardHeader>
    <CardTitle>Raw Material Stock Levels</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={filteredLineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          
          <YAxis
            label={{ 
              value: 'Stock Quantity', 
              angle: -90, 
              position: 'insideLeft',
              offset: 3
            }}
          />
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
    <CardTitle>Order Distribution</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          
          <YAxis
            label={{ 
              value: 'Orders ', 
              angle: -90, 
              position: 'insideLeft',
              offset: 3
            }}
          />
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
              Compared to previous month
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