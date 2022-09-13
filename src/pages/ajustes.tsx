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
      name: data[1].name,
      uv: data[1].priceUsd,
      pv: 0,
     
    },
    {
      name:data[2].name,
      uv:data[2].priceUsd,
      pv: 0,
      
    },
    {
      name: data[3].name,
      uv: data[3].priceUsd,
      pv: 0,
      
    },
    {
      name: data[4].name,
      uv: data[4].priceUsd,
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
