import Global from './styles/global'
import styled from "styled-components"
import Grid from './Components/Grid'
import Form from './Components/Form'

import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  return (
    <>
      <Container>
        <Form />
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Global />
    </>
  )
}

export default App
