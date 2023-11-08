import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useTranslator } from './hooks/useTranslator'

function App () {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useTranslator()
  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button
        onClick={() => { dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' }) }}
      >
        Cambiar a español
      </button>
    </div>
  )
}

export default App
