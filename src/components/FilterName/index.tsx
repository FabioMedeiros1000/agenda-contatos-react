import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { changeNameToSearch } from '../../store/reducers/filter'

import * as S from './styles'

const FilterName = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleAutocomplete = (event: Event) => {
      const inputElement = event.target as HTMLInputElement

      if (
        inputElement === inputRef.current &&
        document.activeElement !== inputElement
      ) {
        inputElement.value = ''
        dispatch(changeNameToSearch(''))
      }
    }

    const inputElement = inputRef.current
    inputElement?.addEventListener('input', handleAutocomplete)

    return () => {
      inputElement?.removeEventListener('input', handleAutocomplete)
    }
  }, [dispatch])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeNameToSearch(event.target.value))
  }

  return (
    <div>
      <S.Label htmlFor="contato">Nome do contato</S.Label>
      <S.Input
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

export default FilterName
