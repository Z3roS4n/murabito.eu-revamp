import { getTranslations } from "next-intl/server";
import AnimatedHeadline from "@/components/ui/animated-headline";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'Privacy Policy — Antonio Murabito',
  description:
    "Privacy Policy per murabito.eu. Informazioni sul trattamento dei dati personali in conformità al GDPR. / Privacy Policy for murabito.eu. Information on personal data processing in accordance with GDPR.",
  robots: 'index, follow',
};

export default async function PrivacyPolicy() {
  const t = await getTranslations("homepage.privacyPolicy");

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white relative overflow-hidden">
      {/* Blue Spotlight Background - same style as main page */}
      <div
        className="absolute inset-0 z-0 pointer-events-none dark:bg-[#0a0a0a] bg-[#ffffff]"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(37, 99, 235, 0.10), transparent 40%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.08), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(96, 165, 250, 0.12), transparent 20%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(14, 165, 233, 0.07), transparent 35%)
          `,
        }}
      />

      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <AnimatedHeadline
              title={t("title")}
              className="scroll-m-20 pb-2 text-5xl md:text-6xl font-semibold tracking-tight first:mt-0 text-center"
            />
            <p className="text-center text-neutral-600 dark:text-neutral-400 mt-4">
              {t("lastUpdated")}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t("intro")}
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {t("section1.title")}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
              {t("section1.content")}
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                <strong>{t("section1.owner")}</strong>
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                {t("section1.address")}
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                {t("section1.fiscalCode")}
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                {t("section1.vat")}
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mt-3">
                <strong>{t("section1.contacts")}</strong>
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                {t("section1.email")}
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                {t("section1.pec")}
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {t("section2.title")}
            </h2>
            
            {/* Subsection A */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                {t("section2.subsectionA.title")}
              </h3>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                {t("section2.subsectionA.content")}
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2">
                {t("section2.subsectionA.privacyFriendly")}
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                  {t("section2.subsectionA.point1")}
                </li>
                <li className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                  {t("section2.subsectionA.point2")}
                </li>
                <li className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                  {t("section2.subsectionA.point3")}
                </li>
                <li className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                  {t("section2.subsectionA.point4")}
                </li>
              </ul>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mt-3">
                <strong>{t("section2.subsectionA.purpose")}</strong>
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>{t("section2.subsectionA.legalBasis")}</strong>
              </p>
            </div>

            {/* Subsection B */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                {t("section2.subsectionB.title")}
              </h3>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                {t("section2.subsectionB.content")}
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>{t("section2.subsectionB.purpose")}</strong>
              </p>
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>{t("section2.subsectionB.legalBasis")}</strong>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {t("section3.title")}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t("section3.content")}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {t("section4.title")}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
              {t("section4.content")}
            </p>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t("section4.vercelInfo")}
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {t("section5.title")}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
              <strong>{t("section5.contactData")}</strong>
            </p>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <strong>{t("section5.analyticsData")}</strong>
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
              {t("section6.title")}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
              {t("section6.content")}
            </p>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
              {t("section6.additionalRights")}
            </p>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t("section6.contactInfo")}
            </p>
          </section>

          {/* Back to home link */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold"
            >
              ← Torna alla Home / Back to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}