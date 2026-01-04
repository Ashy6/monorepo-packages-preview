import { useState } from 'react'
import { useDebounce } from '@my-repo/hooks'
import { Input } from 'repo-ui'

export function UseDebounceDemo() {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500)

  return (
    <div className="space-y-4">
      <Input 
        label="Type quickly:"
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Type something..."
      />
      <div className="p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-500">Real-time value: {inputValue}</p>
        <p className="font-bold">Debounced value (500ms): {debouncedValue}</p>
      </div>
    </div>
  )
}
