import { useToggle, useDebounce } from '@ashy1949/repo-hooks'
import { useState } from 'react'

export function HooksUsage() {
  const [isOn, toggle] = useToggle()
  const [text, setText] = useState('')
  const debouncedText = useDebounce(text, 500)

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded bg-white">
        <h3 className="font-bold mb-2">useToggle Example</h3>
        <p className="mb-2 text-gray-600">Click to toggle state:</p>
        <button
          onClick={toggle}
          className={`px-4 py-2 rounded transition-colors ${
            isOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
          } text-white font-medium`}
        >
          State: {isOn ? 'ON' : 'OFF'}
        </button>
      </div>

      <div className="p-4 border rounded bg-white">
        <h3 className="font-bold mb-2">useDebounce Example</h3>
        <p className="mb-2 text-gray-600">Type below (debounced 500ms):</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded w-full mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="Type something..."
        />
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 p-2 rounded">
            <span className="text-gray-500 block">Real-time value:</span>
            <span className="font-mono">{text || '(empty)'}</span>
          </div>
          <div className="bg-indigo-50 p-2 rounded border border-indigo-100">
            <span className="text-indigo-500 block">Debounced value:</span>
            <span className="font-mono font-bold text-indigo-700">{debouncedText || '(empty)'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
