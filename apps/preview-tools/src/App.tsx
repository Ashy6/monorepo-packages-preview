import { useState } from 'react'
import { formatDate, deepClone, currencyFormatter, truncateString } from '@my-repo/utils'
import { useToggle, useDebounce, useLocalStorage } from '@my-repo/hooks'
import { useWalletConnection } from '@my-repo/libs'

function App() {
  // Utils Demo State
  const date = new Date()
  const [cloneObj] = useState({ a: 1, b: { c: 2 } })
  
  // Hooks Demo State
  const [isOn, toggle] = useToggle()
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500)
  const [storedValue, setStoredValue] = useLocalStorage('demo-key', 'default')

  // Wagmi Demo State
  const { address, isConnected, status, connect, disconnect } = useWalletConnection()

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Tools & Web3 Preview</h1>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Utils</h2>
        <p><strong>Date:</strong> {formatDate(date)}</p>
        <p><strong>Currency:</strong> {currencyFormatter(12345.67)}</p>
        <p><strong>Truncate:</strong> {truncateString("This is a very long string that needs truncating", 20)}</p>
        <p><strong>Deep Clone:</strong> {JSON.stringify(deepClone(cloneObj))}</p>
      </section>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Hooks</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>useToggle</h3>
          <button onClick={toggle}>
            State: {isOn ? 'ON' : 'OFF'}
          </button>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>useDebounce</h3>
          <input 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Type something..."
          />
          <p>Debounced Value: {debouncedValue}</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>useLocalStorage</h3>
          <input 
            value={storedValue} 
            onChange={(e) => setStoredValue(e.target.value)} 
          />
          <p>Stored Value: {storedValue}</p>
        </div>
      </section>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Web3 (Wagmi)</h2>
        <p>Status: {status}</p>
        <p>Connected: {isConnected ? 'Yes' : 'No'}</p>
        <p>Address: {address || 'Not connected'}</p>
        
        {!isConnected ? (
          <button onClick={() => connect()}>Connect Wallet</button>
        ) : (
          <button onClick={() => disconnect()}>Disconnect</button>
        )}
      </section>
    </div>
  )
}

export default App
