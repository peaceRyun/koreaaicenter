import './globals.css';
import localFont from 'next/font/local';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

export const metadata = {
    title: 'Korea AI EduCenter',
    description: 'Generated by create next app',
};

const pretendard = localFont({
    src: '/fonts/pretendardVariable.woff2',
    display: 'swap',
    preload: true,
    weight: '400 700',
});

export default function RootLayout({ children }) {
    return (
        <html lang='ko'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </head>
            <body className={`${pretendard.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
