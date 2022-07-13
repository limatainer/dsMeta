import React from 'react'
import SalesCard from './SalesCard'

import './styles.css'

export default function Main() {
  return (
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard />
        </div>
      </section>
    </main>
  )
}
