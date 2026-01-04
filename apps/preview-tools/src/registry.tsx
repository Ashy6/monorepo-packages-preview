import { ButtonUsage } from './demos/usage/ButtonUsage'
import { CardUsage } from './demos/usage/CardUsage'
import { InputUsage } from './demos/usage/InputUsage'
import { HooksUsage } from './demos/usage/HooksUsage'
import { UtilsUsage } from './demos/usage/UtilsUsage'
import { LibsUsage } from './demos/usage/LibsUsage'

// Import raw source code
import ButtonUsageCode from './demos/usage/ButtonUsage.tsx?raw'
import CardUsageCode from './demos/usage/CardUsage.tsx?raw'
import InputUsageCode from './demos/usage/InputUsage.tsx?raw'
import HooksUsageCode from './demos/usage/HooksUsage.tsx?raw'
import UtilsUsageCode from './demos/usage/UtilsUsage.tsx?raw'
import LibsUsageCode from './demos/usage/LibsUsage.tsx?raw'

export type PackageName = 'Usage Examples';

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
  'Usage Examples': {
    name: 'Usage Examples',
    label: 'Package Usage',
    items: [
      { name: 'Button', description: 'Demonstrating Button component usage from @ashy1949/repo-ui', component: ButtonUsage, code: ButtonUsageCode },
      { name: 'Card', description: 'Demonstrating Card and Tag component usage from @ashy1949/repo-ui', component: CardUsage, code: CardUsageCode },
      { name: 'Input', description: 'Demonstrating Input component usage from @ashy1949/repo-ui', component: InputUsage, code: InputUsageCode },
      { name: 'Hooks', description: 'Demonstrating usage of hooks from @ashy1949/repo-hooks', component: HooksUsage, code: HooksUsageCode },
      { name: 'Utils', description: 'Demonstrating usage of utilities from @ashy1949/repo-utils', component: UtilsUsage, code: UtilsUsageCode },
      { name: 'Libs', description: 'Demonstrating usage of libraries from @ashy1949/repo-libs', component: LibsUsage, code: LibsUsageCode },
    ]
  }
}
