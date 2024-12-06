import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Container, HamburgerContent } from './styles'
import variaveis from '../../styles/variaveis'
import FiltroName from '../FiltroName'
import FiltroCard from '../FiltroCard'

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
          color={variaveis.preto}
        />
      </div>
      <HamburgerContent className={isOpen ? 'is-open' : ''}>
        <div className="divideInCols">
          <FiltroName />
          <FiltroCard />
        </div>
      </HamburgerContent>
    </Container>
  )
}

export default HamburgerMenu
