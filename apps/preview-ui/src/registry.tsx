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

export type PackageName = 'repo-ui' | '@my-repo/hooks' | '@my-repo/utils' | '@my-repo/libs';

export interface ComponentDoc {
  name: string;
  description: string;
  component: React.ComponentType;
}

export interface PackageDoc {
  name: PackageName;
  label: string;
  items: ComponentDoc[];
}

export const registry: Record<PackageName, PackageDoc> = {
  'repo-ui': {
    name: 'repo-ui',
    label: 'UI Components',
    items: [
      { name: 'Button', description: 'A clickable button component with different variants.', component: ButtonDemo },
      { name: 'Input', description: 'Input field for user text entry.', component: InputDemo },
      { name: 'Card', description: 'Container component for grouping content.', component: CardDemo },
      { name: 'Modal', description: 'Dialog window that sits on top of the main view.', component: ModalDemo },
      { name: 'Tag', description: 'Label for categorizing or organizing items.', component: TagDemo },
    ]
  },
  '@my-repo/hooks': {
    name: '@my-repo/hooks',
    label: 'React Hooks',
    items: [
      { name: 'useToggle', description: 'Hook to manage boolean state.', component: UseToggleDemo },
      { name: 'useDebounce', description: 'Hook to debounce a changing value.', component: UseDebounceDemo },
      { name: 'useLocalStorage', description: 'Hook to manage localStorage state.', component: UseLocalStorageDemo },
    ]
  },
  '@my-repo/utils': {
    name: '@my-repo/utils',
    label: 'Utilities',
    items: [
      { name: 'formatDate', description: 'Format a date object or string.', component: FormatDateDemo },
      { name: 'currencyFormatter', description: 'Format numbers as currency.', component: CurrencyDemo },
      { name: 'truncateString', description: 'Truncate a string to a specific length.', component: TruncateDemo },
      { name: 'deepClone', description: 'Deeply clone an object or array.', component: DeepCloneDemo },
    ]
  },
  '@my-repo/libs': {
    name: '@my-repo/libs',
    label: 'Libraries',
    items: [
      { name: 'useWalletConnection', description: 'Wagmi wrapper for wallet connection.', component: WalletDemo },
    ]
  }
}
