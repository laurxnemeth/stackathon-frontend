import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <Navigation role="navigation">
        <List class="menu">
          <a href="/home">
            <ListItem>Play?</ListItem>
          </a>
          <a href="/about">
            <ListItem>What?</ListItem>
          </a>
          <a href="/thedeveloper">
            <ListItem>Who?</ListItem>
          </a>
        </List>
      </Navigation>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  display: flex;
  background: #ecbdbd;
  height: max-content;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  padding: 1vh 5vw 1vh 5vw;
`

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background: #ecbdbd;
  padding: 0px;
`

const Navigation = styled.nav`
  width: 100vw;
  background: #ecbdbd;
`

const ListItem = styled.li`
  background: #ecbdbd;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
