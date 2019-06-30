// @flow
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://twitter.com/pyotr_chan');
  expect(getContactHref('github', '#')).toBe('https://github.com/pyotr-chan');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('vkontakte', '#')).toBe('https://vk.com/#');
  expect(getContactHref('telegram', '#')).toBe('telegram:#');
  expect(getContactHref('rss', '#')).toBe('#');
});
