import styled from "@emotion/styled"

const Container = styled.div`
  color: #fff;
  display:flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Image = styled.img`
  display: block;
  width: 120px;
`

const Text = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`

const Price = styled.p`
  font-size: 23px;

  span {
    font-weight: bold;
  }
`

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Crypto" />
      <div>
        <Price>El precio es de: <span>{PRICE}</span></Price>
        <Text>Precio más alto del día: <span>{HIGHDAY}</span></Text>
        <Text>Precio más bajo del día: <span>{LOWDAY}</span></Text>
        <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
      </div>
    </Container>
  )
}

export default Result