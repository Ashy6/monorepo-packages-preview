import { useToggle } from '@my-repo/hooks'
import { Button } from 'repo-ui'

export function UseToggleDemo() {
  const [isOn, toggle] = useToggle()

  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full ${isOn ? 'bg-green-500' : 'bg-red-500'}`} />
      <Button onClick={toggle}>
        Current State: {isOn ? 'ON' : 'OFF'}
      </Button>
    </div>
  )
}
