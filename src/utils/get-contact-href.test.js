// @flow
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://twitter.com/neco_neco_pyon');
  expect(getContactHref('github', '#')).toBe('#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('vkontakte', '#')).toBe('https://vk.com/#');
  expect(getContactHref('telegram', '#')).toBe('telegram:#');
  expect(getContactHref('rss', '#')).toBe('#');
});
