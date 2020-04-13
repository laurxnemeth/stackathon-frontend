import React from 'react'

const About = () => {
  return (
    <div id="about">
      <h1>Wordy!</h1>
      <div className="questions">
        <h3>What is this?</h3>
        <p>
          This is a ‘Mad Libs™’ style game where you are prompted with a random
          assortment of words to be filled out, specified by their role in parts
          of speech (a.k.a. verb, noun, adverb, etc). Then, a paragraph appears
          with your words inserted for you! You might make a funny paragraph, a
          weird paragraph, it all depends on what you write!
        </p>
      </div>
      <div className="questions">
        <h3>Why does this exist?</h3>
        <p>
          This is a personal project started in the Grace Hopper Program at
          Fullstack Academy. There were only two constraints: try out new tech,
          and attempt to have a prototype done by three days. The new tech I
          experimented with were: Koa.js, React hooks, and the Merriam-Webster's
          Collegiate® Dictionary API. It was fun, so I decided to keep pursuing
          it after graduation!
        </p>
      </div>
      <div className="questions">
        <h3>What book are these paragraphs from?</h3>
        <p>
          They’re from the book Little Women by Louisa May Alcott. You can read
          the entire novel{' '}
          <a href="https://www.gutenberg.org/ebooks/514">here</a> or at your
          local <a href="https://www.worldcat.org/libraries">library</a>.
        </p>
      </div>
      <div className="questions">
        <h3>What's the tech?</h3>
        <p>
          This was written in Javascript, and developed using React, Koa.js,
          PostgreSQL, and the Merriam-Webster's Collegiate® Dictionary API. You
          can find all of the code{' '}
          <a href="https://github.com/laurxnemeth/stackathon-frontend">here</a>{' '}
          and{' '}
          <a href="https://github.com/laurxnemeth/stackathon-backend">here</a>.
        </p>
      </div>
      <div className="questions">
        <h3>Will you add more books?</h3>
        <p>
          Yes! I’m open to suggestions (given that they are public domain, such
          as books found in{' '}
          <a href="https://www.gutenberg.org/">Project Gutenberg</a>), so let me
          know on <a href="https://www.twitter.com/laurxnemeth">Twitter</a>!
        </p>
      </div>
    </div>
  )
}
export default About
