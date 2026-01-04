import { Input } from '@ashy1949/repo-ui'

export function InputUsage() {
  return (
    <div className="space-y-4 max-w-md">
      <Input placeholder="Enter your username..." label="Username" />
      <Input placeholder="Enter your email..." label="Email Address" type="email" />
      <Input placeholder="Enter password..." label="Password" type="password" />
    </div>
  )
}
