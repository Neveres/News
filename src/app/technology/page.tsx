import { navItems } from 'src/settings'
import Home from '../page'

export default function Technology() {
  return Home({ pathname: navItems[3].href })
}
