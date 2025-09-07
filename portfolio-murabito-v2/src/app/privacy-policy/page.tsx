const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen w-full dark:bg-black bg-white relative overflow-hidden">
        {/* Blue Spotlight Background */}
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
      </div>
    </>
  );
}

export default PrivacyPolicy;