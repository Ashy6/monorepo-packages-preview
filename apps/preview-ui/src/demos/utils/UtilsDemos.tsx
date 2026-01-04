import { formatDate, deepClone, currencyFormatter, truncateString } from '@ashy1949/repo-utils'

export function FormatDateDemo() {
  const date = new Date()
  return (
    <div className="space-y-2">
      <p>Original: {date.toISOString()}</p>
      <p className="font-bold">Formatted: {formatDate(date)}</p>
    </div>
  )
}

export function CurrencyDemo() {
  return (
    <div className="space-y-2">
      <p>Amount: 12345.6789</p>
      <p className="font-bold">Formatted: {currencyFormatter(12345.6789)}</p>
    </div>
  )
}

export function TruncateDemo() {
  const text = "This is a very long string that needs truncating because it is too long."
  return (
    <div className="space-y-2">
      <p>Original: {text}</p>
      <p className="font-bold">Truncated (20 chars): {truncateString(text, 20)}</p>
    </div>
  )
}

export function DeepCloneDemo() {
  const obj = { a: 1, b: { c: 2 }, d: [3, 4] }
  const cloned = deepClone(obj)
  return (
    <div className="space-y-2">
      <p>Original: {JSON.stringify(obj)}</p>
      <p className="font-bold">Cloned: {JSON.stringify(cloned)}</p>
      <p className="text-xs text-gray-500">Check console to verify reference equality</p>
    </div>
  )
}
