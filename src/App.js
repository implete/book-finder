import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchForm from './components/SearchForm';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([])

  const handleSearch = (value) => {
    setBooks(value.docs);
  }

  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container fluid>
          <Navbar.Brand href="/">Open Library book search</Navbar.Brand>
          <SearchForm onSearch={handleSearch} />
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Row xs={1} md={2} lg={4} className="g-4">
          {books.map(book => (
            <Book
              title={book.title}
              author={book.author_name}
              year={book.first_publish_year}
              cover={book.cover_i}
              link={book.key}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
