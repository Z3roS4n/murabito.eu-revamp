import {NextIntlClientProvider} from 'next-intl';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/Footer';
import { CookieProvider } from '@/context/CookieContext';
 
type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;

  return (
    <NextIntlClientProvider locale={locale}>
      <CookieProvider>
        <div className="transition-all duration-100 min-h-screen bg-primary-foreground">
          <div className="w-full flex justify-center">
            <Navbar />
          </div>
          {children}
        </div>
      </CookieProvider>
    </NextIntlClientProvider>
  )
}