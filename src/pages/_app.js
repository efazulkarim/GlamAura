import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import ColorSwitcher from '../common/elements/color-switcher/ColorSwitcher';


function MyApp({ Component, pageProps }) {
  return (
    <>
		<ColorSwitcher />
		<Component {...pageProps} />
    </>
  )
}

export default MyApp
