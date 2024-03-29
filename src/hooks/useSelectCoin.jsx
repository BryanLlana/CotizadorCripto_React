import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
`

const useSelectCoin = (label, coins) => {
  const [state, setState] = useState('')

  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={e => setState(e.target.value)}>
        <option value="">--Seleccione--</option>
        { coins.map(c => (
          <option value={c.id} key={c.id} >{c.name}</option>
        ))}
      </Select>
    </>
  )

  return [ state, SelectCoin ]
}

export default useSelectCoin