import {
  HStack,
  List,
  ListItem,
  Spinner,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";
// import useData from '../hooks/useData'

interface Props {
  onSelectGenre: (genre: Genre) => void; //note
}
const GenreList = ({ onSelectGenre }: Props) => {
  // const {genres} = useGenres();
  // const {data} = useData<Genre>('/genres')
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
