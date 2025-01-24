import { Analytics } from "@vercel/analytics/react"
import { Web3Provider } from './components/Web3Provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>White List Haust Testnet</title>
        <meta name="description" content="Whitelist Haust Testnet" />
      </head>
      <body>
        <Web3Provider>
          {children}
          <Analytics />
        </Web3Provider>
      </body>
    </html>
  );
}