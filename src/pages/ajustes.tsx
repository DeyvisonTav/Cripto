import Layout from "../components/template/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useFetch } from "./api/useFetch";
import { useEffect, useState } from "react";

interface CriptoProps {
  name: string;
  symbol: string;
  priceUsd: number;
}

export default function Ajustes() {
  const { data } = useFetch();
  const [cripto, setCripto] = useState<CriptoProps[] | any>([]);
  useEffect(() => {
    const moedas = data.slice(0, 5);
    setCripto(moedas);
    console.log(moedas);
  }, [data]);

  const date = cripto?.map((item: CriptoProps) => ({
    name: item.name,
    uv: item.priceUsd,
    pv: 0,
  }));
  return (
    <div className="w-screen">
      <Layout
        titulo="Ajustes & Configurações"
        subtitulo="Personalize o sistema por aqui!"
      >
        <h3 className="  pb-10 pt-10 lg:pr-[48rem]">
          Faça seus ajuste de moedas aqui para ver o gráfico!
        </h3>
        <div className="md:w-[60rem] w-full md:pt-20 ">
          <LineChart
            width={1200}
            height={500}
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
            <Line type="monotone" dataKey="uv" stroke="#38925a" />
          </LineChart>
        </div>
      </Layout>
    </div>
  );
}
