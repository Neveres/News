import { navItems } from 'src/settings'
import Home from '../page'

export default function Business() {
  return Home({ pathname: navItems[1].href })
}
