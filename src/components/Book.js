import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Book = ({ title, author, year, cover, link }) => {
    const coverSrc = !!cover ? `https://covers.openlibrary.org/b/id/${cover}-L.jpg` : "https://via.placeholder.com/350x500?text=No+cover";
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={coverSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{year}</Card.Subtitle>
                </Card.Body>
                <Card.Body>
                    <Card.Text>
                        {(!!author) ? author.join(" | ") : "Unknown author"}
                    </Card.Text>
                    <Card.Link href={"https://openlibrary.org" + link} target="_blank">View</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Book;