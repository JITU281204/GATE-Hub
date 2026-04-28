import './globals.css';

export const metadata = {
  title: 'GATE Hub | Premium GATE Test Series',
  description: 'The ultimate platform for GATE aspirants to practice and excel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
