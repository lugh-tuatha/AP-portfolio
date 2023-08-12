'use client'
import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  );
}

export default Providers;