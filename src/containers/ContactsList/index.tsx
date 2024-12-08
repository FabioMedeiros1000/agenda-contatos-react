import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import Contact from '../../components/Contact'
import AddButton from '../../components/AddButton'

import { RootReducer } from '../../store'

import * as S from './styles'

const ContactsList = () => {
  const { items, showFavorites } = useSelector(
    (state: RootReducer) => state.contacts
  )
  const { nameToSearch } = useSelector((state: RootReducer) => state.filter)

  const contacts = useMemo(() => {
    let filteredContacts = items

    if (showFavorites) {
      filteredContacts = items.filter((item) => item.isFavorite === true)
    }

    if (nameToSearch) {
      filteredContacts = filteredContacts.filter((item) =>
        item.name.toLowerCase().includes(nameToSearch.toLowerCase())
      )
    }

    return filteredContacts
  }, [items, nameToSearch, showFavorites])

  return (
    <S.Container>
      <S.Title>Meus contatos</S.Title>
      {items.length === 0 ? (
        <S.P>Não há contatos cadastrados!</S.P>
      ) : contacts.length === 0 ? (
        <S.P>Não há contatos que correspondem ao filtro aplicado!</S.P>
      ) : (
        <S.CardContainer>
          {contacts.map((i) => (
            <li key={i.id}>
              <Contact
                isFavorite={i.isFavorite}
                id={i.id}
                email={i.email}
                name={i.name}
                phone={i.phone}
                isEditing={i.isEditing}
              />
            </li>
          ))}
        </S.CardContainer>
      )}
      <AddButton />
    </S.Container>
  )
}

export default ContactsList
