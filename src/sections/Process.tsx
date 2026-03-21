export function Process() {
  const steps = [
    {
      num: "1",
      title: "Mă suni",
      desc: "Îmi spui ce ai nevoie și stabilim o vizită.",
    },
    {
      num: "2",
      title: "Evaluare",
      desc: "Vedem locația și discutăm detaliile.",
    },
    {
      num: "3",
      title: "Executare",
      desc: "Fac lucrarea curat și la timp.",
    },
    {
      num: "4",
      title: "Predare",
      desc: "Verifici și plătești când ești mulțumit.",
    },
  ];

  return (
    <section className="section-padding bg-grey-100">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-black mb-3">
            Cum lucrăm
          </h2>
          <p className="text-grey-600">
            Proces simplu, fără complicații.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-5 text-center">
              <span className="text-brand font-semibold text-lg">{step.num}.</span>
              <h3 className="text-black mt-2 mb-1">{step.title}</h3>
              <p className="text-grey-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
            <p className="text-sm text-grey-700">
              <span className="font-medium">Avans în funcție de lucrare.</span> Discutăm termenii de plată la evaluare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
