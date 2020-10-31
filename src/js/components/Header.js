import React from 'react'
import { Message } from 'semantic-ui-react'

const Header = () => (
  <Message style={{ margin: '0 1rem' }}>
    <Message.Header>Order your favorite menu items!</Message.Header>
    <Message.List>
      <Message.Item>Now offering delivery!</Message.Item>
    </Message.List>
  </Message>
)

export default Header
