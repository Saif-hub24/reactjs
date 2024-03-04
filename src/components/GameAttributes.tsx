import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import Definitionitem from "./Definitionitem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <Definitionitem term="Platform">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </Definitionitem>
        <Definitionitem term="Metascore">
          <CriticScore score={game.metacritic} />
        </Definitionitem>
        <Definitionitem term="Genres">
          {game.genres.map((genre) => (
            <Text>{genre.name}</Text>
          ))}
        </Definitionitem>
        <Definitionitem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text>{publisher.name}</Text>
          ))}
        </Definitionitem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
