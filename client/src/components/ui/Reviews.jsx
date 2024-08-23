import Carousel from "react-bootstrap/Carousel";








export default function Reviews(reviews) {



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
    <Carousel style={{margin: '5', display: 'flex', justifyContent: 'center'}}>
    {reviews.map((el) => (
      <Carousel.Item key={el.id}>
        <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
          <h3>{el.author}</h3>
          <p>{el.text}</p>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}
