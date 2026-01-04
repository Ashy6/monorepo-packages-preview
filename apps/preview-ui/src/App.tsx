import { useState } from 'react'
import { Button, Input, Card, Modal, Tag } from '@my-repo/ui'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold">UI Components Preview</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Inputs</h2>
        <div className="max-w-md space-y-4">
          <Input label="Username" placeholder="Enter username" />
          <Input label="Password" type="password" placeholder="Enter password" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cards</h2>
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
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tags</h2>
        <div className="flex gap-2">
          <Tag variant="info">Info</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="error">Error</Tag>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
        >
          <p className="mb-4">This is a modal component from the UI library.</p>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </section>
    </div>
  )
}

export default App
