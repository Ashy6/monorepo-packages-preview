import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Layout } from './components/Layout'
import { registry, PackageName } from './registry'

function App() {
  const [currentPackage, setCurrentPackage] = useState<PackageName>('@ashy1949/repo-ui')
  const [currentComponent, setCurrentComponent] = useState<string>('')

  // Reset component selection when package changes
  useEffect(() => {
    const firstItem = registry[currentPackage].items[0]
    if (firstItem) {
      setCurrentComponent(firstItem.name)
    }
  }, [currentPackage])

  const pkgData = registry[currentPackage]
  const componentData = pkgData.items.find(item => item.name === currentComponent)

  return (
    <Layout
      currentPackage={currentPackage}
      onPackageChange={setCurrentPackage}
      currentComponent={currentComponent}
      onComponentChange={setCurrentComponent}
    >
      {componentData ? (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b pb-4">
            <div className="flex items-baseline gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{componentData.name}</h1>
              <span className="text-sm px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-mono">
                {currentPackage}
              </span>
            </div>
            <p className="text-gray-600 text-lg">{componentData.description}</p>
          </div>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
              Preview
            </h2>
            <div className="p-8 border rounded-lg bg-white shadow-sm min-h-[200px] flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="w-full">
                <componentData.component />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gray-600 rounded-full"></span>
              Source Code
            </h2>
            <div className="rounded-lg overflow-hidden border bg-gray-900 text-gray-100 p-6 shadow-md">
               <ReactMarkdown 
                components={{
                  code({node, inline, className, children, ...props}: any) {
                    return (
                      <code className={`${className} font-mono text-sm`} {...props}>
                        {children}
                      </code>
                    )
                  },
                  pre({node, children, ...props}: any) {
                    return (
                      <pre className="overflow-auto" {...props}>
                        {children}
                      </pre>
                    )
                  }
                }}
              >
                {`\`\`\`tsx\n${componentData.code}\n\`\`\``}
              </ReactMarkdown>
            </div>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100 text-blue-800 text-sm">
            <strong>Import:</strong>
            <code className="ml-2 bg-white px-2 py-1 rounded border border-blue-200">
              {`import { ${componentData.name} } from '${currentPackage}'`}
            </code>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          Select a component to view details
        </div>
      )}
    </Layout>
  )
}

export default App
