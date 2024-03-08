import styled from '@emotion/styled'
import useSelectCoin from '../hooks/useSelectCoin'
import coins from '../data/coins'

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
  const [ moneda, SelectCoin ] = useSelectCoin('Elige tu moneda', coins)
  return (
    <form>
      <SelectCoin />
      <Submit type="submit" value='Cotizar' />
    </form>
  )
}

export default Form