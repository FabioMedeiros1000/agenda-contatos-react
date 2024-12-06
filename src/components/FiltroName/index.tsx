import { useEffect, useRef } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { alterarTermo } from '../../store/reducers/filtro'

const FiltroName = () => {
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
    <div>
      <S.Label htmlFor="contato">Nome do contato</S.Label>
      <S.Campo
        id="contato"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Digite..."
        autoComplete="off"
        name="sidebar-filter"
      />
    </div>
  )
}

export default FiltroName
