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

export default function Home() {
  const { data, isFetching } = useFetch();
   
  console.log(data);

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
                  <Tr>
                    <Td>{data[0].name}</Td>
                    <Td>{data[0].symbol}</Td>
                    <Td isNumeric>{data[0].priceUsd}</Td>
                  </Tr>
                  <Tr>
                    <Td>{data[1].name}</Td>
                    <Td>{data[1].symbol}</Td>
                    <Td isNumeric>{data[1].priceUsd}</Td>
                  </Tr>
                  <Tr>
                    <Td>{data[2].name}</Td>
                    <Td>{data[2].symbol}</Td>
                    <Td isNumeric>{data[2].priceUsd}</Td>
                  </Tr>
                  <Tr>
                    <Td>{data[3].name}</Td>
                    <Td>{data[3].symbol}</Td>
                    <Td isNumeric>{data[3].priceUsd}</Td>
                  </Tr>
                  <Tr>
                    <Td>{data[4].name}</Td>
                    <Td>{data[4].symbol}</Td>
                    <Td isNumeric>{data[4].priceUsd}</Td>
                  </Tr>
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
