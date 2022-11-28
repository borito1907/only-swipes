import { Button, Flex, Link } from "@chakra-ui/react";
import { CHATROOMS, DASHBOARD } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "../../hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="purple.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="purple" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
        <Link color="purple" ml="100px" as={RouterLink} to={CHATROOMS}>
          ChatRooms
        </Link>

        <Button
          ml="auto"
          colorScheme="purple"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}