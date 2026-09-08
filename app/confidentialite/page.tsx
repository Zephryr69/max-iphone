export const metadata = {
  title: "Politique de confidentialité — Max iPhone",
  description: "Comment Max iPhone traite les informations transmises via ce site.",
};

export default function PrivacyPage() {
  return (
    <div className="w-[min(820px,calc(100%-2rem))] mx-auto py-10 md:py-14">
      <h1 className="font-marketing font-bold text-[clamp(1.7rem,3vw+1rem,2.1rem)] mb-6">
        Politique de confidentialité
      </h1>

      <div className="space-y-5 text-[15px] text-text-2 leading-relaxed">
        <p>
          Cette page explique simplement ce qui se passe lorsque vous utilisez ce site,
          notamment le formulaire de la page Contact.
        </p>

        <div>
          <h2 className="text-text font-semibold text-[16.5px] mb-1.5">
            Le formulaire de contact
          </h2>
          <p>
            Le formulaire de la page Contact ne stocke aucune donnée sur un serveur.
            Lorsque vous l&apos;envoyez, votre navigateur ouvre directement une conversation
            WhatsApp avec Max iPhone, pré-remplie avec les informations que vous avez
            saisies (nom, téléphone, message). Ces informations transitent uniquement par
            WhatsApp, dans les conditions d&apos;utilisation et de confidentialité de
            WhatsApp/Meta.
          </p>
        </div>

        <div>
          <h2 className="text-text font-semibold text-[16.5px] mb-1.5">
            Cookies et mesure d&apos;audience
          </h2>
          <p>
            Le site n&apos;utilise pas de cookies de suivi ni d&apos;outil d&apos;analyse
            tiers à ce jour. Un identifiant technique local (choix du thème clair/sombre)
            peut être conservé dans votre navigateur, uniquement sur votre appareil.
          </p>
        </div>

        <div>
          <h2 className="text-text font-semibold text-[16.5px] mb-1.5">Vos droits</h2>
          <p>
            Conformément à la loi n° 2017-20 du 20 avril 2018 portant Code du numérique en
            République du Bénin, vous disposez d&apos;un droit d&apos;accès, de
            rectification et de suppression des informations que vous nous transmettez.
            Pour toute question, contactez-nous directement via WhatsApp ou par email.
          </p>
        </div>

        <p className="text-[13px] text-muted pt-2 border-t border-border">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}.
        </p>
      </div>
    </div>
  );
}
