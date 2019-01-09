import React from 'react';
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = props => {
  return (
    <div>
      <Form>
        <InputGroup>
          <Input
            type="text"
            name="search"
            id="search"
            placeHolder={props.placeHolder || 'Search for anything'}
            onChange={props.searchFunc}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <FontAwesomeIcon icon="search" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
