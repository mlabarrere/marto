import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Marto, le logiciel d\'inventaires le plus puissant du marché',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="https://marto.flutterflow.app"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30">
              Marto 2.2 vient de sortir
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
          Marto, le logiciel d'inventaires le plus puissant du marché.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          Partout, à tout moment, gratuit et sans engagement 🧑‍⚖️
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://marto.flutterflow.app" target="_blank">Créer son compte</Button>
            <Button variant="secondary" href="/pricing">
              Les offres premiums
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
        Tous vos inventaires en un seul endroit.
        </Heading>
        <Screenshot
          //width={1216}
          height={768} // Tu peux enlever cette ligne
          src="/screenshots/app.png"
          className="mt-16 w-full h-auto max-w-full " //sm:max-w-none sm:h-auto sm:w-full
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Gestion</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
      Organisez vos inventaires selon votre méthode.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Sections"
          title="Sections et lots sans limite."
          description="Avec Marto, choisissez de diviser votre inventaire en plusieurs sections, et insérez autant de lots que vous voulez."
          graphic={
            <div className="h-80 bg-[url(/screenshots/Sections_and_lots.png)] bg-[size:600px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Partout"
          title="Synchronisation Mobile-Desktop immédiate"
          description="Continuez sur ordinateur ce que vous avez commencé sur mobile, partout et en toute sécurité. Toutes les données sont hébergées à Paris."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/mobile-desktop.png)] bg-[size:512px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Paiements automatisés"
          title="Facturez vos clients automatiquement par email"
          description="Grâce à notre partenaire Stripe, facturez et recevez les paiements en temps réel."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/invoices.png)] bg-[size:512px] bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Partagez"
          title="Envoyez le lien sécurisé de l'inventaire."
          description="Générez un lien d'inventaire et envoyez le à votre client, plus besoin de gérer des dizaines de versions, on s'occupe de tout."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/lien.png)] bg-[size:512px] bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Collaborez"
          title="Editez l'inventaire à plusieurs"
          description="Invitez vos collaborateurs dans votre équipe."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/plusieurs.png)] bg-[size:512px] bg-no-repeat" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Communication</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Enregistrez, exportez, envoyez, etc. 
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="PDF"
            title="Exportez en .pdf vos inventaires"
            description="Générez autant de .pdf que vous souhaitez a chaque étape de rédaction de l'inventaire."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Partagez"
            title="Envoyez le lien sécurisé de l'inventaire."
            description="Générez un lien d'inventaire et envoyez le à votre client, plus besoin de gérer des dizaines de versions, on s'occupe de tout."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Collab"
            title="Envoyez des mails automatiquement"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Collaborez"
            title="Editez l'inventaire à plusieurs"
            description="Invitez vos collaborateurs dans votre équipe."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/*<Container className="mt-10">
          <LogoCloud />
        </Container>*/}
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
        {/*<FeatureSection />*/}
          <BentoSection />
        </div>
        {/*<DarkBentoSection />*/}
      </main>
      {/*<Testimonials />*/}
      <Footer />
    </div>
  )
}
