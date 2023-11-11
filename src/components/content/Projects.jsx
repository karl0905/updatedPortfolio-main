import "./Projects.css";
import Cardprojects from "../cardprojects/Cardprojects";

export default function Projects() {
  return (
    <>
      <h2 className="section__title babas"> Projects</h2>
      <p className="section__para inter">
        Her er et overblik over mine tidligere projekter
      </p>
      <div className="projects__container-flex inter">
        <Cardprojects
          img="./bookbazr.webp"
          description="En webapp til køb og salg af brugte studiebøger.
          Udviklet i NextJS med Tailwind"
          link="https://bookbazr.karlg.dk"
          github_link="https://github.com/karl0905/webapp.git"
          alt="Et snapshot af BookBazr siden"
          delay="300"
        />
        <Cardprojects
          img="./webDoc.webp"
          description="En webdokumentar til kunstneren Mark Ebert"
          link="https://karlg.dk/webDoc-main/"
          github_link="https://github.com/karl0905/webDoc-main.git"
          alt="Et snapshot af hjemmesiden til kunstneren Mark Løvendahl"
          delay="400"
        />
        <Cardprojects
          img="./black.webp"
          description="More coming soon"
          hideButtons={true}
          alt="Et tomt sort billede"
          delay="500"
        />
      </div>
    </>
  );
}
