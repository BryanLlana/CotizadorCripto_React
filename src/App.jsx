import styled from '@emotion/styled'
import ImagenCripto from '/img/imagen_criptos.png'
import Form from './components/Form'
import { useState } from 'react'
import { useEffect } from 'react'
import Result from './components/Result'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (width >= 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  width: 100%;
  margin: 0 auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 34px;

  @media (width >= 768px){
    margin-top: 0px;
    margin-bottom: 0px;
  }

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const App = () => {
  const [currencies, setCurrencies] = useState({})
  const [result, setResult] = useState({})

  useEffect(() => {
    if (Object.values(currencies).length > 0) {
      const quote = async () => {
        const { crypto, coin } = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
        const response = await fetch(url)
        const data = await response.json()
        setResult(data.DISPLAY[crypto][coin])
      }
      quote()
    }
  }, [currencies])

  return (
    <Container>
      <Image src={ImagenCripto} alt='Imagen Cripto'/>
      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <Form setCurrencies={setCurrencies} />
        { result.PRICE && <Result result={result} /> }
      </div>
    </Container>
  )
}

export default App
