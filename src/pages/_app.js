import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import ColorSwitcher from '../common/elements/color-switcher/ColorSwitcher';
import { SSRProvider } from '@react-aria/ssr';


function MyApp({ Component, pageProps }) {
  return (

    <SSRProvider>
      <ColorSwitcher />
      <Component {...pageProps} />
    </SSRProvider>

  )
}

export default MyApp
