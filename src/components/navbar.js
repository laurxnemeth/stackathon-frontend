import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <Navigation role="navigation">
        <List className="menu" id="nav">
          <a href="/home">
            <ListItem>play game</ListItem>
          </a>
          <Span></Span>
          <a href="/about">
            <ListItem>FAQ</ListItem>
          </a>
          <Span></Span>
          <a href="/thedeveloper">
            <ListItem>the developer</ListItem>
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
  padding: 1vh 3vw 1vh 5vw;
`

const List = styled.ul`
  display: flex;
  background: #ecbdbd;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
`

const Navigation = styled.nav`
  background: #ecbdbd;
`

const ListItem = styled.li`
  background: #ecbdbd;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Span = styled.span`
  height: 10px;
  width: 10px;
  background-color: #fbfaf8;
  border-radius: 50%;
`
