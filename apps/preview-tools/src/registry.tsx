import { ButtonUsage } from './demos/usage/ButtonUsage'
import { CardUsage } from './demos/usage/CardUsage'
import { InputUsage } from './demos/usage/InputUsage'

export type PackageName = 'Usage Examples';

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
  'Usage Examples': {
    name: 'Usage Examples',
    label: 'Repo UI Usage',
    items: [
      { name: 'Button', description: 'Demonstrating Button component usage from @ashy1949/repo-ui', component: ButtonUsage },
      { name: 'Card', description: 'Demonstrating Card and Tag component usage from @ashy1949/repo-ui', component: CardUsage },
      { name: 'Input', description: 'Demonstrating Input component usage from @ashy1949/repo-ui', component: InputUsage },
    ]
  }
}
