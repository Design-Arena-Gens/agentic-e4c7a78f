export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-24 md:px-12 lg:px-20">
        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              Assistant IA
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Voici ce que je peux faire pour concrétiser vos idées.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200/80 md:text-xl">
              Je conçois, code et explique. Du prototype à la documentation,
              j&apos;orchestre chaque étape pour transformer votre vision en
              expérience numérique hautement soignée.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Conception guidée",
                description:
                  "Je structure les idées, clarifie les besoins et propose une feuille de route UX qui tient compte des contraintes techniques.",
                points: [
                  "Audit de besoins et cadrage produit",
                  "Personas, parcours, user stories",
                  "Charte et design system Tailwind/React",
                ],
              },
              {
                title: "Développement web complet",
                description:
                  "Application Next.js moderne, API sécurisée, intégrations tierces et automatisations prêtes à déployer sur Vercel.",
                points: [
                  "UI responsive, composants accessibles",
                  "Gestion d’état, données, auth",
                  "Tests, linting et CI/CD",
                ],
              },
              {
                title: "Contenu & communication",
                description:
                  "Rédaction claire en français ou anglais, scripts vidéo, onboarding et documentation pour vos équipes.",
                points: [
                  "Copywriting orienté conversion",
                  "Documentation produit, FAQ, guides",
                  "Scripts et scénarios narratifs",
                ],
              },
              {
                title: "IA & automatisations",
                description:
                  "Conception de workflows IA, prompt engineering, intégration d’agents et automatisation des tâches récurrentes.",
                points: [
                  "Fine-tuning de prompts et garde-fous",
                  "Automations Zapier/Make",
                  "Connecteurs API personnalisés",
                ],
              },
            ].map((capability) => (
              <article
                key={capability.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition hover:border-emerald-400/60 hover:bg-slate-900/50"
              >
                <header className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white">
                    {capability.title}
                  </h2>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
                    Expert
                  </span>
                </header>
                <p className="text-sm text-slate-200/80">
                  {capability.description}
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-100/80">
                  {capability.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-10 shadow-[0_40px_120px_-60px_rgba(76,255,164,0.3)]">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">
              Ma méthode en quatre temps
            </h2>
            <p className="max-w-3xl text-slate-200/75">
              Chaque projet suit un processus clair qui garantit rythme,
              transparence et qualité. Vous suivez les livrables au fur et à
              mesure, sans surprise.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Explorer",
                detail:
                  "Immersion rapide dans votre contexte, analyse des données existantes et définition des objectifs mesurables.",
              },
              {
                step: "02",
                title: "Composer",
                detail:
                  "Architecture de l’information, maquettes basse fidélité et choix techniques alignés sur les besoins.",
              },
              {
                step: "03",
                title: "Construire",
                detail:
                  "Développement modulaire, tests unitaires, intégration continue et suivi des métriques de performance.",
              },
              {
                step: "04",
                title: "Amplifier",
                detail:
                  "Livraison, documentation, formation et optimisation continue à partir des retours terrain.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-emerald-400/40 hover:bg-white/[0.08]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200/80">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10">
          <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold text-white">
                Résultats concrets
              </h2>
              <p className="max-w-2xl text-slate-200/80">
                Quelques exemples d&apos;impact mesurable obtenu avec des
                produits propulsés par des IA et des expériences numériques
                immersives.
              </p>
            </div>
            <span className="inline-flex h-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-200">
              Études de cas
            </span>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                metric: "+43%",
                title: "Taux de conversion",
                narrative:
                  "Refonte complète d’un parcours d’achat B2B avec personnalisation en temps réel et argumentaire dynamique.",
              },
              {
                metric: "x4",
                title: "Vélocité produit",
                narrative:
                  "Mise en place d’un design system et de scripts d’automatisation qui réduisent de 75% le temps de livraison.",
              },
              {
                metric: "-60%",
                title: "Support client",
                narrative:
                  "Déploiement d’agents conversationnels spécialisés et de bases de connaissances contextuelles multilingues.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6"
              >
                <span className="text-4xl font-semibold text-emerald-300">
                  {item.metric}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200/80">{item.narrative}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/70 p-10">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">
              Stack privilégiée
            </h2>
            <p className="max-w-3xl text-slate-200/80">
              Chaque outil est choisi pour sa robustesse, sa maintenabilité et
              son intégration naturelle avec Vercel.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Next.js 14",
                detail:
                  "Routes App Router, rendering hybride, server actions et edge functions.",
              },
              {
                name: "TypeScript",
                detail:
                  "Sécurité du typage, contrats clairs, réduction des régressions.",
              },
              {
                name: "Tailwind CSS",
                detail:
                  "Design system modulaire, prototypage ultra-rapide, theming dark/light.",
              },
              {
                name: "Prisma & Supabase",
                detail:
                  "Modélisation de données rigoureuse, API GraphQL/REST, policies RLS.",
              },
              {
                name: "Playwright & Vitest",
                detail:
                  "Tests end-to-end et unitaires pour sécuriser chaque livraison.",
              },
              {
                name: "OpenAI & LangChain",
                detail:
                  "Agents orchestrés, RAG, intégrations vecteurs, orchestration de prompts.",
              },
            ].map((item) => (
              <article
                key={item.name}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-200/75">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-10">
          <header className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white">
              Prêt à lancer votre prochain projet ?
            </h2>
            <p className="max-w-2xl text-slate-100/80">
              Décrivez votre idée, vos contraintes et vos objectifs. Je peux
              livrer un plan d’action détaillé, un prototype interactif ou un
              produit complet prêt à déployer.
            </p>
          </header>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="mailto:contact@example.com"
              className="flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-300"
            >
              Démarrer une mission
            </a>
            <a
              href="https://cal.com"
              className="flex items-center justify-center rounded-2xl border border-emerald-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:border-emerald-200 hover:text-emerald-100"
              target="_blank"
              rel="noreferrer"
            >
              Planifier un échange
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
