import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlateforms, { Platform } from "../hooks/usePlateforms";

interface Props {
  setSelectedPlaform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  selectedPlatformId,
  setSelectedPlaform,
}: Props) => {
  const { data, error, isLoading } = usePlateforms();

  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlaform(platform)}
            key={platform.id}
            fontWeight={selectedPlatformId === platform.id ? "bold" : "normal"}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
