import { InputGroup, DropdownButton, Dropdown, Form } from "react-bootstrap";
const Search = (props) => {
  return (
    <>
      <InputGroup
        className="mb-3"
        onChange={props.onChange}
        value={props.Search}
     
      >
        <Form.Control
          aria-label="Text input with dropdown button"
          placeholder="find a repository..."
        
        />

        <DropdownButton
          variant="outline-primary"
          title="Sort"
          id="input-group-dropdown-2"
          align="end"
        >
           <Dropdown.Item
            href="#"
            onClick={() => props.onClick(5)}
          >
            5
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => props.onClick(10)}
          >
            10
          </Dropdown.Item>
          <Dropdown.Item href="#"
           onClick={() => props.onClick(20)}>
            20
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </>
  );
};

export default Search;
