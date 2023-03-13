import Layout from "../components/template/Layout";
import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useFetch } from "./api/useFetch";
import { useEffect, useState } from "react";

interface CriptoProps {
  name: string;
  symbol: string;
  priceUsd: number;
}

export default function Home() {
  const { data, isFetching } = useFetch();
  const [cripto, setCripto] = useState<CriptoProps[] | any>([]);

  useEffect(() => {
    const moedas = data.slice(0, 10);
    setCripto(moedas);
    console.log(moedas);
  }, [data]);
  return (
    <div className="h-full max-w-full">
      <Layout
        titulo="Página Inicial"
        subtitulo="Estamos construindo um template Admin!"
      >
        <div className=" w-[22rem] justify-center items-center text-center md:w-[60rem] pt-20">
          <ChakraProvider>
            <TableContainer>
              <Table variant="simple">
                {/* {isFetching && (
                  <p className="text-center justify-center items-center">
                    carregando...
                  </p>
                )} */}
                <TableCaption>Tabela de cotações</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>symbol</Th>
                    <Th isNumeric>PriceUSD</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cripto?.map((item: CriptoProps, index: number) => (
                    <Tr key={index}>
                      <Td>{item.name}</Td>
                      <Td>{item.symbol}</Td>
                      <Td isNumeric>{item.priceUsd}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Symbol</Th>
                    <Th isNumeric>PriceUSD</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </ChakraProvider>
        </div>
      </Layout>
    </div>
  );
}
