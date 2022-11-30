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
import EditProfile from "./EditProfile"
import { useUser } from "../../hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuth } from "../../hooks/auth";
import format from "date-fns/format";

export default function Profile() {
  const { id } = useParams();
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen: isOpenAvatar, onOpen: onOpenAvatar, onClose: onCloseAvatar } = useDisclosure();
  const { isOpen: isOpenDetails, onOpen: onOpenDetails, onClose: onCloseDetails } = useDisclosure();

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="purple"
            onClick={onOpenAvatar}
          >
          Change Avatar
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

        <EditAvatar isOpen={isOpenAvatar} onClose={onCloseAvatar} />
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
            onClick={onOpenDetails}
          >
          Edit Details
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
                Favorite dining hall
              </Heading>
              <Text pt='2' fontSize='sm'>
              {user.dining}
              </Text>
            </Box>
            <EditProfile isOpen={isOpenDetails} onclose={onCloseDetails} />
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}