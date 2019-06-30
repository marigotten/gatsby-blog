
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from './Contacts';

describe('Contacts', () => {
  const props = {
    contacts: {
      email: '#',
      twitter: 'https://twitter.com/pyotr_chan',
      vkontakte: '#',
      github: 'https://github.com/pyotr-chan',
      rss: '#',
      telegram: '#'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
