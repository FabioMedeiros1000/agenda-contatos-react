import { useDispatch, useSelector } from 'react-redux'
import { cadastrar, toggleShowFavorites } from '../../store/reducers/contatos'
import { Botao } from './styles'
import { RootReducer } from '../../store'

const BotaoAdicionar = () => {
  const dispatch = useDispatch()
  const { showFavorites } = useSelector((state: RootReducer) => state.contatos)

  const cadastrarContato = () => {
    if (showFavorites) {
      dispatch(toggleShowFavorites())
    }
    dispatch(
      cadastrar({ nome: '', email: '', telefone: '', isFavorite: false })
    )
  }

  return <Botao onClick={cadastrarContato}>+</Botao>
}

export default BotaoAdicionar
