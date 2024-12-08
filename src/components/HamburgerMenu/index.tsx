import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

import FilterName from '../FilterName'
import FilterCard from '../FilterCard'

import { Container, HamburgerContent } from './styles'

import variables from '../../styles/variables'

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Container>
      <div className="center">
        <Hamburger
          label="Show menu"
          rounded
          duration={0.5}
          toggled={isOpen}
          toggle={setOpen}
          color={variables.black}
        />
      </div>
      <HamburgerContent className={isOpen ? 'is-open' : ''}>
        <div className="divideInCols">
          <FilterName />
          <FilterCard />
        </div>
      </HamburgerContent>
    </Container>
  )
}

export default HamburgerMenu
