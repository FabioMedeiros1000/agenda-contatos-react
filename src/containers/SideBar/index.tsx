import { useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'
import { Container, Campo, Titulo } from './styles'
import { alterarTermo } from '../../store/reducers/filtro'

const SideBar = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  // Previne que preenchimentos automáticos afetem a lógica do filtro
  useEffect(() => {
    const handleAutocomplete = (evento: Event) => {
      const inputElement = evento.target as HTMLInputElement

      // Apenas reseta o valor se for preenchimento automático
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
      <Titulo>Pesquise o nome</Titulo>
      <Campo
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Nome"
        autoComplete="off"
        name="sidebar-filter"
      />
    </Container>
  )
}

export default SideBar
