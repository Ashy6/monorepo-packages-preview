import { Card, Tag } from '@ashy1949/repo-ui'

export function CardUsage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Card Title">
        <p className="text-gray-600 mb-4">
          This is a card component imported from the published package.
        </p>
        <div className="border-t pt-4 mt-4">
          <Tag variant="success">Active</Tag>
        </div>
      </Card>
      
      <Card title="Another Card">
        <p className="text-gray-600 mb-4">
          Cards are useful for grouping related content together.
        </p>
        <div className="flex gap-2">
          <Tag variant="info">Tag 1</Tag>
          <Tag variant="warning">Tag 2</Tag>
        </div>
      </Card>
    </div>
  )
}
