import { SimpleGrid } from "@chakra-ui/react";
import { useUsers } from "../../hooks/users";
import Friend from "./Friend";
import { getFriends } from "../../hooks/users";
import { useAuth } from "../../hooks/auth";
import { Text } from "@chakra-ui/react"

export default function Friends() {
  const { user, isLoading: userLoading } = useAuth();
 
  if (userLoading) return "Loading...";

  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
      {user?.friends.length === 0 
      ? <Text fontSize="xl" textAlign="center"> You have no friends.</Text>  : user.friends.map((friend) => (
        <Friend key={friend} friendid={friend} />
      ))}
    </SimpleGrid>
  );
}