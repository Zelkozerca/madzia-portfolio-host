import type { AppProps } from 'next/app';
import { useEffect, ReactNode } from 'react';
import LoadFonts from '@styles/LoadFonts';

import '@styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  useEffect(() => {
    LoadFonts();
  }, []);

  return <Component {...pageProps} />;
};
export default MyApp;
