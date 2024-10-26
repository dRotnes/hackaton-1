import { BarChart } from '@mui/x-charts/BarChart';
import FileUpload from './FileUpload';
import Logs from './Logs';
import { 
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "./components/ui/Card";
import AnalyticsDashboard from './AnalyticsDashboard';
import TextileDashboard from './AnalyticsDashboard';

const pedidos = [
  { id: 3, cliente: "João", data: "2024-10-25", status: "Enviado" },
  { id: 2, cliente: "Maria", data: "2024-10-24", status: "Processando" },
  { id: 1, cliente: "Carlos", data: "2024-10-23", status: "Concluído" },
];

function App() {
  
  return (
    <div className="App">
      <header className="bg-blue-300 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">Dallas Mavericks Stock Management</h1>
        </div>
      </header>

      <main>
        <TextileDashboard />

          <Logs pedidos={pedidos} />

        <FileUpload />
      </main>
    </div>
  );
}

export default App;
