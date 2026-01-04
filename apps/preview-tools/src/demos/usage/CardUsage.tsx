import { Card, Tag } from '@ashy1949/repo-ui'

export function CardUsage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Card Title" footer={<Tag variant="success">Active</Tag>}>
        <p className="text-gray-600">
          This is a card component imported from the published package.
        </p>
      </Card>
      
      <Card title="Another Card">
        <p className="text-gray-600 mb-4">
          Cards are useful for grouping related content together.
        </p>
        <div className="flex gap-2">
          <Tag variant="primary">Tag 1</Tag>
          <Tag variant="warning">Tag 2</Tag>
        </div>
      </Card>
    </div>
  )
}
