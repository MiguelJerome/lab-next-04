import Compteur from "../components/Compteur";
import Info from "../components/Info";
import Toggler from "../components/Toggler";
import CompteARebours from "./CompteARebours";

export default function Accueil() {
    return <main>
    <div>
      Je m'appelle Jonathan
    </div>

    <CompteARebours compte={20} />
    
    <Toggler titre="Ceci est un titre" visible>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sunt dignissimos ipsum consequuntur incidunt voluptate qui eligendi tenetur explicabo, dolores nesciunt assumenda id consequatur eveniet laudantium culpa impedit beatae exercitationem.
    </Toggler>

    <Toggler titre="Spoilers!">
      Allo!
    </Toggler>

    <Compteur />
    <Compteur depart={50} />

    <Info text="Allo, je suis simple" />
    <Info text="dfasdfasdf" />
    <Info>
      <p>
        Salut
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Consectetur aperiam voluptatibus
        labore, iure impedit, distinctio molestiae adipisci
        sunt pariatur, quaerat recusandae! Obcaecati magni
        recusandae sequi voluptatem ullam, asperiores delectus
        incidunt?
      </p>
    </Info>
  </main>
}