import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlateforms, { Platform } from "../hooks/usePlateforms";

interface Props {
  setSelectedPlaform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, setSelectedPlaform }: Props) => {
  const { data, error, isLoading } = usePlateforms();

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
            fontWeight={
              selectedPlatform?.id === platform.id ? "bold" : "normal"
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
