import React from 'react'
import { Tabs, Tab } from 'sancho'

function OrderingMenu() {
    const [index, setIndex] = React.useState(0);

    return (
      <Tabs value={index} onChange={i => setIndex(i)}>
        <Tab id="you">Featured Items</Tab>
        <Tab id="sports">Individual Items</Tab>
      </Tabs>
    )
}

export default OrderingMenu
