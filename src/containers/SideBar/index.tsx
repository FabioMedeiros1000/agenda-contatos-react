import { useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'
import { Container, Campo, Titulo, Label } from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import FiltroCard from '../../components/FiltroCard'
import { toggleShowFavorites } from '../../store/reducers/contatos'

const SideBar = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleAutocomplete = (evento: Event) => {
      const inputElement = evento.target as HTMLInputElement

      if (
        inputElement === inputRef.current &&
        document.activeElement !== inputElement
      ) {
        inputElement.value = ''
        dispatch(alterarTermo(''))
      }
    }

    const inputElement = inputRef.current
    inputElement?.addEventListener('input', handleAutocomplete)

    return () => {
      inputElement?.removeEventListener('input', handleAutocomplete)
    }
  }, [dispatch])

  const handleInputChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(alterarTermo(evento.target.value))
  }

  return (
    <Container>
      <Titulo>Filtros</Titulo>
      <Label htmlFor="contato">Nome do contato</Label>
      <Campo
        id="contato"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Digite..."
        autoComplete="off"
        name="sidebar-filter"
      />
      <FiltroCard onClick={() => dispatch(toggleShowFavorites())}>
        Mostrar Favoritos
      </FiltroCard>
    </Container>
  )
}

export default SideBar
