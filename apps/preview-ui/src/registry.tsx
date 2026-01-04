import { ButtonDemo } from './demos/ui/ButtonDemo'
import { InputDemo } from './demos/ui/InputDemo'
import { CardDemo } from './demos/ui/CardDemo'
import { ModalDemo } from './demos/ui/ModalDemo'
import { TagDemo } from './demos/ui/TagDemo'
import { UseToggleDemo } from './demos/hooks/UseToggleDemo'
import { UseDebounceDemo } from './demos/hooks/UseDebounceDemo'
import { UseLocalStorageDemo } from './demos/hooks/UseLocalStorageDemo'
import { FormatDateDemo, CurrencyDemo, TruncateDemo, DeepCloneDemo } from './demos/utils/UtilsDemos'
import { WalletDemo } from './demos/libs/WalletDemo'

// Import source code
import ButtonDemoCode from './demos/ui/ButtonDemo.tsx?raw'
import InputDemoCode from './demos/ui/InputDemo.tsx?raw'
import CardDemoCode from './demos/ui/CardDemo.tsx?raw'
import ModalDemoCode from './demos/ui/ModalDemo.tsx?raw'
import TagDemoCode from './demos/ui/TagDemo.tsx?raw'
import UseToggleDemoCode from './demos/hooks/UseToggleDemo.tsx?raw'
import UseDebounceDemoCode from './demos/hooks/UseDebounceDemo.tsx?raw'
import UseLocalStorageDemoCode from './demos/hooks/UseLocalStorageDemo.tsx?raw'
import UtilsDemosCode from './demos/utils/UtilsDemos.tsx?raw'
import WalletDemoCode from './demos/libs/WalletDemo.tsx?raw'

export type PackageName = '@ashy1949/repo-ui' | '@ashy1949/repo-hooks' | '@ashy1949/repo-utils' | '@ashy1949/repo-libs';

export interface ComponentDoc {
  name: string;
  description: string;
  component: React.ComponentType;
  code: string;
}

export interface PackageDoc {
  name: PackageName;
  label: string;
  items: ComponentDoc[];
}

export const registry: Record<PackageName, PackageDoc> = {
  '@ashy1949/repo-ui': {
    name: '@ashy1949/repo-ui',
    label: 'UI Components',
    items: [
      { name: 'Button', description: 'A clickable button component with different variants.', component: ButtonDemo, code: ButtonDemoCode },
      { name: 'Input', description: 'Input field for user text entry.', component: InputDemo, code: InputDemoCode },
      { name: 'Card', description: 'Container component for grouping content.', component: CardDemo, code: CardDemoCode },
      { name: 'Modal', description: 'Dialog window that sits on top of the main view.', component: ModalDemo, code: ModalDemoCode },
      { name: 'Tag', description: 'Label for categorizing or organizing items.', component: TagDemo, code: TagDemoCode },
    ]
  },
  '@ashy1949/repo-hooks': {
    name: '@ashy1949/repo-hooks',
    label: 'React Hooks',
    items: [
      { name: 'useToggle', description: 'Hook to manage boolean state.', component: UseToggleDemo, code: UseToggleDemoCode },
      { name: 'useDebounce', description: 'Hook to debounce a changing value.', component: UseDebounceDemo, code: UseDebounceDemoCode },
      { name: 'useLocalStorage', description: 'Hook to manage localStorage state.', component: UseLocalStorageDemo, code: UseLocalStorageDemoCode },
    ]
  },
  '@ashy1949/repo-utils': {
    name: '@ashy1949/repo-utils',
    label: 'Utilities',
    items: [
      { name: 'formatDate', description: 'Format a date object or string.', component: FormatDateDemo, code: UtilsDemosCode },
      { name: 'currencyFormatter', description: 'Format numbers as currency.', component: CurrencyDemo, code: UtilsDemosCode },
      { name: 'truncateString', description: 'Truncate a string to a specific length.', component: TruncateDemo, code: UtilsDemosCode },
      { name: 'deepClone', description: 'Deeply clone an object or array.', component: DeepCloneDemo, code: UtilsDemosCode },
    ]
  },
  '@ashy1949/repo-libs': {
    name: '@ashy1949/repo-libs',
    label: 'Libraries',
    items: [
      { name: 'useWalletConnection', description: 'Wagmi wrapper for wallet connection.', component: WalletDemo, code: WalletDemoCode },
    ]
  }
}
