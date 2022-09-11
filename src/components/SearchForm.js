import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false
        }
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm = async (event) => {
        event.preventDefault();
        if (!!event.target[0].value) {
            const query = escape(event.target[0].value);
            const response = await fetch(`http://openlibrary.org/search.json?q=${query}&limit=12`);
            const data = await response.json();
            // Lift state up
            this.props.onSearch(data);
        }
    }

    setButton = (e) => {
        const value = e.target.value.trim();
        let hasValue = (!!value && value.length > 2);
        if (this.state.isValid !== hasValue) {
            this.setState({ isValid: hasValue })
        }
    }

    render() {
        return (
            <Form
                className="d-flex"
                role="search"
                onSubmit={this.handleForm}
            >
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Type to search books
                </Form.Label>
                <Form.Control
                    className="me-2"
                    id="inlineFormInput"
                    placeholder="Type to search books"
                    aria-label="Search"
                    aria-describedby="search-button"
                    onChange={this.setButton}
                />
                <Button
                    variant="success"
                    type="submit"
                    id="search-button"
                    disabled={!this.state.isValid}
                >
                    Search
                </Button>
            </Form>
        )
    }
}

export default SearchForm;
