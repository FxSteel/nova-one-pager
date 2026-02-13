import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#000000"},"dark":{"cal-brand":"#ffffff"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agenda una conversación
          </h2>
          <p className="text-lg text-gray-600">
            Elige un horario que te convenga y hablemos sobre cómo automatizar tu operación.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <Cal 
            namespace="30min"
            calLink="fernando-matus-nova/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}
          />
        </div>
      </div>
    </section>
  );
}
