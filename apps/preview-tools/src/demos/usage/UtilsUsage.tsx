import { formatDate, currencyFormatter, truncateString } from '@ashy1949/repo-utils'

export function UtilsUsage() {
  const now = new Date()
  const amount = 123456.789
  const longText = "This is a very long text that should be truncated because it exceeds the limit."

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded bg-white">
        <h3 className="font-bold mb-2 text-gray-800">formatDate</h3>
        <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
          <div className="text-gray-500">Input:</div>
          <div className="font-mono text-xs bg-gray-50 p-1 rounded">{now.toISOString()}</div>
          <div className="text-gray-500">Output:</div>
          <div className="font-bold text-indigo-600">{formatDate(now)}</div>
        </div>
      </div>

      <div className="p-4 border rounded bg-white">
        <h3 className="font-bold mb-2 text-gray-800">currencyFormatter</h3>
        <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
          <div className="text-gray-500">Input:</div>
          <div className="font-mono">{amount}</div>
          <div className="text-gray-500">Output:</div>
          <div className="font-bold text-green-600">{currencyFormatter(amount)}</div>
        </div>
      </div>

      <div className="p-4 border rounded bg-white">
        <h3 className="font-bold mb-2 text-gray-800">truncateString</h3>
        <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
          <div className="text-gray-500">Input:</div>
          <div className="font-mono text-xs bg-gray-50 p-1 rounded">{longText}</div>
          <div className="text-gray-500">Output (20):</div>
          <div className="font-bold">{truncateString(longText, 20)}</div>
        </div>
      </div>
    </div>
  )
}
