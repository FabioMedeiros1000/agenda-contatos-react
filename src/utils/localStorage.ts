export const saveToLocalStorage = (key: string, value: unknown) => {
  try {
    const serializedValue = JSON.stringify(value)
    console.log(`Salvando dados no localStorage para ${key}:`, serializedValue)
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.error('Erro ao salvar no localStorage', error)
  }
}

export const loadFromLocalStorage = (key: string) => {
  try {
    const serializedValue = localStorage.getItem(key)

    if (serializedValue === null) return undefined
    return JSON.parse(serializedValue)
  } catch (error) {
    console.error('Erro ao carregar do localStorage:', error)
    return undefined
  }
}
