import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * azure test setup shite
 * AD App - EDSharepoint
 * AD AppId - 0a8423f1-0763-4e38-b756-c051be550492
 * AD ObjectID - df0eb046-70dd-4161-bfae-0af94f64bbc4
 * Key 5gjR2p6VJngHoqC+JkMK07wqD7Q8hpUprCjZbUQVHgQ=
 * Directory ID c1b95b3b-0321-4933-bae0-25dc585c7e1c
 * ED Instranet ID: nimms.sharepoint.com,9aad2e22-9a02-43bd-9e4c-37810c5bf0b7,39ce8489-0adb-4735-92d5-87130dbb366a
 * Site lists GUID: 8955205b-c58d-4d30-9613-975bd0a8c456
 * Form digest value: 0x50B9B3F9D0E6FC05B6C3F560A173EC37B4E475DCA9B7383316853A9C7D83A4CBE46711614E92B91996ECA291096C07828C658150F85BA0527F50EECCA17160BA,23 Dec 2018 13:09:47 -0000
 */
