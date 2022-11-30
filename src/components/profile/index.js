import {
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure, 
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Box
} from "@chakra-ui/react";
import EditAvatar from "./EditAvatar";
import { useCheckFriend, useUpdateFriends, useUser } from "../../hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuth } from "../../hooks/auth";
import format from "date-fns/format";
import Users from "../users";

export default function Profile() {
  const { id } = useParams();
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen : isOpenDetails, onOpen : onOpenDetails, onClose : onCloseDetails } = useDisclosure();
  // const { isFriend, isLoading: isFriendLoading } = useCheckFriend(authUser?.id, user?.id);

  const isFriend = authUser?.friends.includes(id);
  const { updateFriends, isLoading: updateFriendsLoading } = useUpdateFriends(authUser?.id, user?.id, isFriend);

  if (userLoading) return "Loading...";


  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id &&  (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="purple"
            onClick={onOpen}
          >
            Change avatar
          </Button>
        )}
        {!authLoading && authUser.id != user.id && isFriend === false &&  (
          <Button
            pos="absolute"
            mb="2"
            top="4"
            right="6"
            colorScheme="purple"
            onClick={updateFriends}
            isLoading={updateFriendsLoading}
          >
            Add Friend
          </Button>
          
        )}
          {!authLoading && authUser.id != user.id && isFriend === true && (
          <Button
            pos="absolute"
            mb="2"
            top="4"
            right="6"
            colorScheme="red"
            onClick={updateFriends}
            isLoading={updateFriendsLoading}
          >
            Remove Friend
          </Button>
          
        )}
        


        <Stack ml="10">
          <Text fontSize="2xl">{user.username}</Text>
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Account Created: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>

        <EditAvatar isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />
      <Card>
      {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="4"
            right="6"
            colorScheme="purple"
            onClick={onOpen}
          >
            Edit details
          </Button>
          
        )}
        
        <CardHeader>
          <Heading size='md'>Account details</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Description
              </Heading>
              <Text pt='2' fontSize='sm'>
                {user.description}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Building
              </Heading>
              <Text pt='2' fontSize='sm'>
              {user.building}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Favorite dinning hall
              </Heading>
              <Text pt='2' fontSize='sm'>
              {user.dinning}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}