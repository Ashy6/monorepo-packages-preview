import { Tag } from 'repo-ui'

export function TagDemo() {
  return (
    <div className="flex gap-2">
      <Tag variant="info">Info</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </div>
  )
}
