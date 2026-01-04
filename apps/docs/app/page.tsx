import { Button, Card } from "@my-repo/ui";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Documentation</h1>
      <p>Welcome to the monorepo documentation.</p>
      
      <div style={{ marginTop: "2rem" }}>
        <h2>Components Preview</h2>
        <Card title="Example Card" style={{ maxWidth: "300px", marginTop: "1rem" }}>
          <p>This is a card component from @my-repo/ui</p>
          <div style={{ marginTop: "1rem" }}>
            <Button>Click Me</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
