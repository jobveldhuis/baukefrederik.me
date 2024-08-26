import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl mb-1 font-bold mb-4">Hi, my name is Job 👋</h1>
      <div className="flex flex-col gap-6">
        <p>
          By day, I work as a{" "}
          <Link href="https://github.com/jobveldhuis/" rel="nofollow">
            full-stack software engineer
          </Link>{" "}
          and by night, I{" "}
          <Link href="https://hoekstraenveldhuis.nl/over/job-veldhuis">write books</Link>. Last
          year, I started an indie publishing company with a friend, called{" "}
          <Link href="https://hoekstraenveldhuis.nl">Uitgeverij Hoekstra & Veldhuis</Link>.
        </p>
        <p>
          I have published two detective novels in Dutch:{" "}
          <Link href="https://hoekstraenveldhuis.nl/product/inspecteur-vos" target="_blank">
            Inspecteur Vos
          </Link>{" "}
          and{" "}
          <Link href="https://hoekstraenveldhuis.nl/product/de-laatste-dag" target="_blank">
            De Laatste Dag
          </Link>
          . My first poetry bundle, De Lotus en de Koekoek, is expected to release somewhere this
          year. You can subscribe to{" "}
          <Link href="https://hoekstraenveldhuis.nl/nieuwsbrief" target="_blank">
            this Dutch newsletter
          </Link>{" "}
          to stay tuned.
        </p>
      </div>
    </>
  );
}
