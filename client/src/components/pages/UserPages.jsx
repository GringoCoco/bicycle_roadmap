import Container from 'react-bootstrap/esm/Container';
import Forma from '../ui/Forma';
import Carousel from "react-bootstrap/Carousel";



export default function UserPages() {

const reviews = [
  {
      id: "1",
      author: "Ivan",
      text: "Horosho",
  },
  {
      id: "2",
      author: "Boris",
      text: "Otlichno",
  },
  {
      id: "5",
      author: "Semen",
      text: "Super",
  }
]

  return (

    <Container style={{width: '400rem', display: 'flex', justifyContent: 'center'}}>
        <Forma />
      

    </Container>

  )
}





