import { useLocalStorage } from '@my-repo/hooks'
import { Button, Input } from '@ashy1949/repo-ui'

export function UseLocalStorageDemo() {
  const [storedValue, setStoredValue] = useLocalStorage('demo-key', 'default')

  return (
    <div className="space-y-4">
      <Input 
        label="Persisted Input:"
        value={storedValue} 
        onChange={(e) => setStoredValue(e.target.value)} 
      />
      <p className="text-sm text-gray-500">
        Refresh the page, and this value will persist.
      </p>
    </div>
  )
}
