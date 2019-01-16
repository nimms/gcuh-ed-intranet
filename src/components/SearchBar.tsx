import React from 'react';
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const SearchBar = props => {
  return (
    <div>
      <Form>
        <InputGroup>
          <Input
            type="text"
            name="search"
            id="search"
            placeholder={props.placeholder || 'Search for anything'}
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
