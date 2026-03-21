export function TrustBar() {
  return (
    <section className="bg-grey-100 py-8 border-y border-grey-200">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <div className="text-2xl font-semibold text-black">2 ani</div>
            <div className="text-sm text-grey-600">Experiență</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-grey-300" />
          <div>
            <div className="text-2xl font-semibold text-black">2 ani</div>
            <div className="text-sm text-grey-600">Garanție</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-grey-300" />
          <div>
            <div className="text-2xl font-semibold text-black">L - D</div>
            <div className="text-sm text-grey-600">Disponibilitate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
