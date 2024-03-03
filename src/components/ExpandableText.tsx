import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpandable] = useState(false);
  const limit = 500;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit);

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpandable(!expanded)}
        colorScheme="yellow"
        size="xs"
        fontWeight="bold"
        marginLeft="2"
      >
        {expanded ? "Show less" : "Read more..."}
      </Button>
    </Text>
  );
};

export default ExpandableText;
