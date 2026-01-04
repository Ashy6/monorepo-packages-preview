import { Input } from '@ashy1949/repo-ui'

export function InputDemo() {
  return (
    <div className="max-w-md space-y-4">
      <Input label="Username" placeholder="Enter username" />
      <Input label="Password" type="password" placeholder="Enter password" />
    </div>
  )
}
