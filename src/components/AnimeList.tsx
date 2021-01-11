import { IonList, IonSpinner } from '@ionic/react';
import React, { FC, useEffect, useState } from 'react';
import { Anime } from '../models';
import AnimePreview from './AnimePreview';

// Définit la structure de la réponse attendue de l'API
interface AllAnimeResponse {
  data: Anime[],
  meta: {
    count: number,
  },
  links: {
    first: string,
    next: string,
    last: string,
  },
}

const AnimeList: FC = () => {
  // Retient un état qui est appelé à contenir les données reçues de l'API
  const [animes, setAnimes] = useState<Anime[]>([]);

  // Le hook d'effet (useEffect) nous permet de définir des comportements qui
  // doivent être exécutés à chaque changement d'état d'une ou plusieurs
  // variables.
  // En l'occurrence, on donne une liste de variables vide pour faire en sorte
  // que le comportement s'exécute uniquement au moment où le composant est
  // monté dans le DOM.
  useEffect(
    // Comportement à exécuter à chaque changement d'état
    () => {
      // Récupère la liste des 10 premiers animés de l'API
      fetch('https://kitsu.io/api/edge/anime')
      .then( response => response.json() )
      .then( (json: AllAnimeResponse) => setAnimes(json.data) );
    },
    // Liste de dépendances vide = exécution uniquement au montage
    []
  );

  // Tant que la requête n'a pas répondu, afficher un loader
  if (animes.length === 0) {
    return <IonSpinner />;
  }

  // Sinon, basculer vers l'affichage normal
  return (
    <IonList>
      {
        animes.map(
          anime =>
            <AnimePreview anime={anime} />
        )
      }
    </IonList>
  );
};

export default AnimeList;
