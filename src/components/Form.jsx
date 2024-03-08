import styled from '@emotion/styled'
import useSelectCoin from '../hooks/useSelectCoin'
import coins from '../data/coins'
import { useEffect } from 'react'
import { useState } from 'react'
import Alerta from './Alerta'

const Submit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Form = () => {
  const [cryptos, setCryptos] = useState([])
  const [ coin, SelectCoin ] = useSelectCoin('Elige tu moneda', coins)
  const [ crypto, SelectCrypto ] = useSelectCoin('Elige una criptomoneda', cryptos)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const queryApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
      const response = await fetch(url)
      const { Data } = await response.json()
      const arrayCripto = Data.map(d => {
        const object = {
          id: d.CoinInfo.Name,
          name: d.CoinInfo.FullName
        }
        return object
      })
      setCryptos(arrayCripto)
    }
    queryApi()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([crypto, coin].includes('')) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000)
      return
    }
  }

  return (
    <>
    { alert && <Alerta>Todos los campos son obligatorios</Alerta> }
    <form onSubmit={handleSubmit}>
      <SelectCoin />
      <SelectCrypto />
      <Submit type="submit" value='Cotizar' />
    </form>
    </>
  )
}

export default Form