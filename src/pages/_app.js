import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import ColorSwitcher from '../common/elements/color-switcher/ColorSwitcher';
import { datadogRum } from '@datadog/browser-rum';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    datadogRum.init({
      applicationId: '946d3d57-c2f1-40a4-aece-065dbd419e01',
      clientToken: 'pubd04b086929aee9e7a57b62731d0f91ea',
      site: 'us5.datadoghq.com',
      service: 'glaumaura_blog',
      env: process.env.NEXT_PUBLIC_DATADOG_ENV,
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


