import styled from "@emotion/styled"

const Error = styled.div`
  background-color: red;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: .5rem 0 .5rem 0;
  font-size: 1.2rem;
  border-radius: .5rem;

  @media (width >= 768px){
    margin-top: 1rem;
  }
`

const Alerta = ({ children }) => {
  return (
    <Error>{children}</Error>
  )
}

export default Alerta