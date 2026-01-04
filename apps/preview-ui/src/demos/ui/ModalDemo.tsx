import { useState } from 'react'
import { Modal, Button } from 'repo-ui'

export function ModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
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
    </div>
  )
}
