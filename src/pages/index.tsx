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
                    <Td>Ethereum</Td>
                    <Td>ETH</Td>
                    <Td isNumeric>1620.7691114038028483</Td>
                  </Tr>
                  <Tr>
                    <Td>Tether</Td>
                    <Td>USDT</Td>
                    <Td isNumeric>1.0024157971840956</Td>
                  </Tr>
                  <Tr>
                    <Td>USD Coin	</Td>
                    <Td>USDC</Td>
                    <Td isNumeric>1.0031445397965252</Td>
                  </Tr>
                  <Tr>
                    <Td>BNB</Td>
                    <Td>BNB</Td>
                    <Td isNumeric>282.6969549849119802</Td>
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
