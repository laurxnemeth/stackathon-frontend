import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { newExcerpt } from './components/results';

// test('renders start game link', () => {
//   const { getByTestId } = render(<App />)
//   const linkElement = getByTestId('startGame')
//   expect(linkElement).toBeInTheDocument()
// })

describe('Helper functions', () => {
  test('result should return an excerpt with words substituted', () => {
    const input = {
      noun0: 'coffee',
      noun1: 'cat',
      noun2: 'water',
      noun3: 'lysol',
      noun4: 'coronavirus',
      verb0: 'jump',
      verb1: 'cried',
      'geographical name2': 'Jeremy',
    };
    const excerpt =
      'Mrs. {NOUN} was herself again directly, {VERB} the {NOUN} over, and stretched out her arms to her daughters, saying, in a {NOUN} they never forgot, I shall go at once, but it may be too late. Oh, children, children, help me to bear it! For several {NOUN} there was nothing but the {NOUN} of {VERB} in the {GEOGRAPHICALNAME}';
    const output =
      'Mrs. COFFEE was herself again directly, JUMP the CAT over, and stretched out her arms to her daughters, saying, in a WATER they never forgot, I shall go at once, but it may be too late. Oh, children, children, help me to bear it! For several LYSOL there was nothing but the CORONAVIRUS of CRIED in the JEREMY';

    expect(newExcerpt(input, excerpt)).toEqual(output);
  });
});
