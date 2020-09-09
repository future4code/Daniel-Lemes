import React from "react";
import { ShowCardContainer, PosterImage, ShowTitle } from "./styled";

const ShowCard = (props) => {
  const onClickCard = () => {
    props.changeScreen("detail");
    props.changeShowId(props.id);
  };

  return (
    <ShowCardContainer onClick={onClickCard}>
      {props.profile.photo && (
        <PosterImage alt={props.profile.name} src={props.profile.photo} />
      )}
      <ShowTitle>{props.profile.name}</ShowTitle>
    </ShowCardContainer>
  );
};

export default ShowCard;