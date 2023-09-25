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
        <Cardprojects img="./webDoc.webp" description="En webdokumentar til kunstneren Mark Ebert" link="https://karlg.dk/webDoc-main/" github_link="https://github.com/karl0905/webDoc-main.git" alt="Et snapshot af hjemmesiden til kunstneren Mark Løvendahl"delay="300"/>
        <Cardprojects img="./keramik.webp" description="Et websted til et keramikværksted i centrum af Aarhus" link="https://karlg.dk/keramik_2" github_link="https://github.com/karl0905/keramik_2.git" alt="Et snapshot af hjemmesiden til et keramikværksted" delay="400"/>
        <Cardprojects img="./black.webp" link="javascript:void(0)" description="More coming soon" hideButtons={true} alt="Et tomt sort billede"delay="500"/>
      </div>
    </>
  );
}
