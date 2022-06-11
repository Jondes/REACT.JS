import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
export default function ReactTabs() {
  const [tabKey, initTabKey] = useState('one')
  return (
    <div>
      <h2 className="mb-3">Football Player Profiles</h2>
      <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
        <Tab eventKey="one" title="Cristiano Ronaldo">
          <p>
          Cristiano Ronaldo dos Santos Aveiro 
          is a Portuguese professional
           footballer who plays as a forward for
            Premier League club Manchester United
           and captains the Portugal national team.
          </p>
        </Tab>
        <Tab eventKey="two" title="Jack Grealish">
          <p>Jack Peter Grealish (born 10 September 1995) is an 
              English footballer who plays as a winger or attacking
               midfielder for Premier League club Manchester City 
               and the England national team.</p>
        </Tab>
        <Tab eventKey="three" title="Neymar">
          <p>Neymar da Silva Santos Júnior (born 5 February 1992), known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team.</p>
        </Tab>
        <Tab eventKey="four" title="Lionel Messi">
          <p>Lionel Andrés Messi(born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.</p>
        </Tab>
      </Tabs>
    </div>
  )
}