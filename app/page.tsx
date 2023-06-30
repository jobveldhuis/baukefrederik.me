import { Playfair_Display } from "@next/font/google";
import Link from "next/link";
import { ClientWrapper } from "./client-wrapper";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <ClientWrapper>
      <>
        <h1 className={`${heading.className} text-5xl mb-1`}>Hello.</h1>
        <p>
          <span className="font-bold">My name is Job</span>. I am a full-stack software engineer and
          author, based in Harderwijk, The Netherlands. In open source, I mainly build Ratio, a
          Python framework for web applications, which is currently being developed and not fully
          production ready. You can find it on{" "}
          <Link href="https://pypi.org/project/ratio/" target="_blank">
            Pypi
          </Link>{" "}
          and my{" "}
          <Link href="https://github.com/jobveldhuis/ratio" target="_blank">
            GitHub
          </Link>
          .
        </p>
        <p>
          I have published two detective novels in Dutch:{" "}
          <Link href="https://www.hoekstraenveldhuis.nl/products/inspecteur-vos" target="_blank">
            Inspecteur&nbsp;Vos
          </Link>{" "}
          and{" "}
          <Link href="https://www.hoekstraenveldhuis.nl/products/de-laatste-dag" target="_blank">
            De&nbsp;Laatste&nbsp;Dag
          </Link>
          . My first poetry bundle, De Lotus en de Koekoek, is expected to release somewhere this
          year. You can follow me on{" "}
          <Link href="https://twitter.com/baukefrederik" target="_blank">
            Twitter
          </Link>{" "}
          to stay tuned.
        </p>
        <p>
          As pastime, I love to play and referee the beautiful Dutch sport of korfball.
          Occasionally, I also play some futsal and from time to time I sell some custom designed
          apparel via my webshop, <Link href="https://deregering.info">De&nbsp;Regering</Link>.
        </p>
      </>
    </ClientWrapper>
  );
}
