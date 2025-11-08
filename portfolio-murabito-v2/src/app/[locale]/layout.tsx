import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from '@/components/layout/navbar';
import { getRequestConfig } from 'next-intl/server';
 
type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <NextIntlClientProvider locale={locale}>
      <div className="transition-all duration-100 min-h-screen bg-primary-foreground">
        <div className="w-full flex justify-center">
          <Navbar />
        </div>
        {children}
        {/*<div>
          <Footer/>
        </div>*/}
      </div>
    </NextIntlClientProvider>
  )
}