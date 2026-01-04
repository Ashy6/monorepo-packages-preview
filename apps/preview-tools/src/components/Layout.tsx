import React, { useState } from 'react';
import { registry, PackageName } from '../registry';
import { Package, Menu, ChevronDown } from 'lucide-react';

interface LayoutProps {
  currentPackage: PackageName;
  onPackageChange: (pkg: PackageName) => void;
  currentComponent: string;
  onComponentChange: (name: string) => void;
  children: React.ReactNode;
}

export function Layout({ 
  currentPackage, 
  onPackageChange, 
  currentComponent, 
  onComponentChange,
  children 
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="h-16 border-b flex items-center px-6 sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center gap-2 mr-8">
          <div className="bg-indigo-600 text-white p-1 rounded">
            <Package size={24} />
          </div>
          <span className="font-bold text-xl text-gray-800">Preview Tools</span>
        </div>

        {/* Package Selector */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 border rounded-md hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-700">{registry[currentPackage].label}</span>
            <ChevronDown size={16} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMenuOpen && (
            <div className="absolute top-full mt-2 w-56 bg-white border rounded-lg shadow-lg py-2 z-20">
              {(Object.keys(registry) as PackageName[]).map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => {
                    onPackageChange(pkg);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                    currentPackage === pkg ? 'text-indigo-600 font-medium bg-indigo-50' : 'text-gray-600'
                  }`}
                >
                  {registry[pkg].label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="ml-auto text-sm text-gray-500">
          Package Consumption Demo
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-gray-50 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
              Examples
            </h3>
            <nav className="space-y-1">
              {registry[currentPackage].items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onComponentChange(item.name)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    currentComponent === item.name
                      ? 'bg-indigo-100 text-indigo-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8 lg:px-12">
          {children}
        </main>
      </div>
    </div>
  );
}
