import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface TextAreaProps {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceHolder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (loading === true) {
    return 'Loading...'
  }
  if (type === SectionType.From) {
    return 'Enter text'
  }
  return 'Translation'
}

export const TextArea = ({ type, loading, value, onChange }: TextAreaProps) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
    as={'textarea'}
    disabled={type === SectionType.To && loading === true}
    autoFocus={type === SectionType.From}
    placeholder={getPlaceHolder({ type, loading })}
    style={styles}
    value={value}
    onChange={handleChange}
  />
  )
}
