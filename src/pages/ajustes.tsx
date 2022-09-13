import Layout from '../components/template/Layout'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useFetch } from './api/useFetch';
export default function Ajustes() {
  const {data} = useFetch()
  const date = [
    {
      name: data[0].name,
      uv: data[0].priceUsd,
      pv: 0,
      
    },
    {
      name:'Ethereum',
      uv: 1620.7691114038028483,
      pv: 0,
     
    },
    {
      name: "TetherC",
      uv: 1.0024157971840956,
      pv: 0,
      
    },
    {
      name: "USD Coin",
      uv: 1.0031445397965252,
      pv: 0,
      
    },
    {
      name: "BNB",
      uv: 282.6969549849119802,
      pv: 0,
      
    },
    
  ];
  return (
    <div className="w-screen">
    <Layout titulo="Ajustes & Configurações" 
       
      subtitulo="Personalize o sistema por aqui!">
      <h3 className='  pb-10 pt-10 lg:pr-[48rem]'>Faça seus ajuste de moedas aqui para ver o gráfico!</h3>
      <div className='md:w-[60rem] w-full md:pt-20 '>
      <LineChart
        width={500}
        height={300}
        data={date}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
    </Layout>
    </div>
  )
}
