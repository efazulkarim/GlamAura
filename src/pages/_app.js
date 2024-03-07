import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import ColorSwitcher from '../common/elements/color-switcher/ColorSwitcher';
import { datadogRum } from '@datadog/browser-rum';
import { useEffect } from 'react';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    datadogRum.init({
      applicationId: '491e0737-1ea0-4e16-ba03-846251658567',
      clientToken: 'pubec84b273ee10c2d47ace33cbb44b847a',
      site: 'us5.datadoghq.com',
      service: 'glamaura',
      env: 'production',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
    });

    datadogRum.startSessionReplayRecording();
  }, []);

  return (
    <>

      <ColorSwitcher />
      <Component {...pageProps} />

    </>
  )
}


