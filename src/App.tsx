import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { useTranslator } from './hooks/useTranslator'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

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
    <Container fluid>
      <h2 className='h2'>Google Translate Component</h2>
      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}/>
        <TextArea
          type={SectionType.From}
          value={fromText}
          onChange={setFromText}
        />
        </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
        <Stack gap={3}>
        <LanguageSelector
          type={SectionType.To}
          value={toLanguage}
        onChange={setToLanguage}/>
        <TextArea
          type={SectionType.To}
          value={result}
          onChange={setResult}
          loading={loading}
        />
        </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
