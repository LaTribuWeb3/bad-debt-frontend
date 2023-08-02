import IronBank from './IronBank'
import Inverse from './Inverse'
import Mai from './Mai'

/**
 * use kabab-case to register your platform component
 * components should be a simple function rendering simple HTML
 */
const register = {
  "iron-bank": IronBank,
  "inverse": Inverse,
  "MAI": Mai,
}

export default register