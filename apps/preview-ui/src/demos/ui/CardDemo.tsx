import { Card, Tag } from '@my-repo/ui'

export function CardDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card title="Card Title 1">
        <p className="text-gray-600">This is some card content. It can contain anything.</p>
      </Card>
      <Card title="Card Title 2">
        <div className="flex justify-between items-center">
          <span>Status:</span>
          <Tag variant="success">Active</Tag>
        </div>
      </Card>
    </div>
  )
}
