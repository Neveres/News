import { navItems } from 'src/settings'
import Home from '../page'

export default function Science() {
  return Home({ pathname: navItems[2].href })
}
