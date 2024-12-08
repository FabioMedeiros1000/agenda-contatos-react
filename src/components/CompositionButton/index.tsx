import React, { ReactNode } from 'react'

import SaveButton from './SaveButton'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

type CompositionButtonProps = {
  children: ReactNode
}

const CompositionButton = ({ children }: CompositionButtonProps) => {
  return <div>{children}</div>
}

CompositionButton.Save = SaveButton
CompositionButton.Cancel = CancelButton
CompositionButton.Edit = EditButton
CompositionButton.Delete = DeleteButton

export default CompositionButton
