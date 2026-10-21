import './globals.css';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';

export const metadata = {
    title: 'L Xhurxhi Construction Ltd | Premier Construction & Refurbishment London',
    description: 'High-quality residential extensions, loft conversions, and full home refurbishments delivered with craftsmanship and transparency across London.',
    keywords: ['London Construction', 'Home Refurbishment', 'Property Extensions', 'Loft Conversions', 'L Xhurxhi Construction'],
    openGraph: {
        title: 'L Xhurxhi Construction Ltd',
        description: 'Quality construction and home transformations across London.',
        type: 'website',
        locale: 'en_GB',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        {children}
        <WhatsAppFloat
            phone="447393285567"
            message="Hello! I would like to request a quote for my construction project."
        />
        </body>
        </html>
    );
}