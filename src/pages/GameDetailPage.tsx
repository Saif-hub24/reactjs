import React from "react";
import { useParams } from "react-router-dom";
import useFetchGames from "../hooks/useFetchGame";

const GameDetailPage = () => {
  const params = useParams();

  //   const game = useFetchGames();
  //   console.log(game.then(res => res.data));

  return <div>GameDetailPage {params.id}</div>;
};

export default GameDetailPage;
