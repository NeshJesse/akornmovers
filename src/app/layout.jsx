"use client";
import './styles/globals.css';

import { useState } from 'react';

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="">
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
