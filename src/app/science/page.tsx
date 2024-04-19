import { navItems } from '@/config'
import Home from '../page'

export default function Science() {
  return Home({ pathname: navItems[2].href })
}
