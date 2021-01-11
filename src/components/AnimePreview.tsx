import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { Anime } from "../models";
import './AnimePreview.css';

interface AnimePreviewProps {
  anime: Anime,
}

const AnimePreview: FC<AnimePreviewProps> = ({ anime }) => {
  let coverImage = null;
  if (anime.attributes.coverImage) {
    coverImage = <img src={anime.attributes.coverImage.tiny} alt={`Cover for ${anime.attributes.canonicalTitle}`} />;
  }

  return (
    <IonCard>
      {coverImage}

      <IonCardHeader>
        <IonCardTitle>
          {anime.attributes.canonicalTitle}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <div className="AnimePreview-content">
          {anime.attributes.synopsis}
        </div>
      </IonCardContent>
    </IonCard>
  );
;
  }

export default AnimePreview;
