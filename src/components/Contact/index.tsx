import { useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'

import CompositionButton from '../CompositionButton'
import Favorite from '../Favorite'

import { RootReducer } from '../../store'

import * as S from './styles'

export type ContactProps = {
  name: string
  email: string
  phone: string
  id: number
  isEditing: boolean
  isFavorite: boolean
}

const Contact = ({
  name: originalName,
  email: originalEmail,
  phone: originalPhone,
  id
}: ContactProps) => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  const [name, setName] = useState(originalName)
  const [email, setEmail] = useState(originalEmail)
  const [phone, setPhone] = useState(originalPhone)

  const nameInputRef = useRef<HTMLInputElement>(null)

  const currentContact = items.find((item) => item.id === id)

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name || '')
      setEmail(currentContact.email || '')
      setPhone(currentContact.phone || '')
    }
  }, [id, items, currentContact])

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [])

  return (
    <S.Card>
      <S.Name
        ref={nameInputRef}
        disabled={!currentContact?.isEditing}
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Nome"
      />
      <S.Email
        disabled={!currentContact?.isEditing}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <S.Phone
        disabled={!currentContact?.isEditing}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Telefone"
      />
      <S.FavoriteContainer>
        <Favorite id={id} />
      </S.FavoriteContainer>
      {currentContact?.isEditing ? (
        <CompositionButton>
          <CompositionButton.Save
            name={name}
            email={email}
            id={id}
            phone={phone}
            isFavorite={currentContact.isFavorite ? true : false}
          />
          <CompositionButton.Cancel
            email={originalEmail}
            phone={originalPhone}
            name={originalName}
            id={id}
          />
        </CompositionButton>
      ) : (
        <CompositionButton>
          <CompositionButton.Edit id={id} />
          <CompositionButton.Delete id={id} />
        </CompositionButton>
      )}
    </S.Card>
  )
}

export default Contact
