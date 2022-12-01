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
import EditProfile from "./EditProfileModal"
import { useUser } from "../../hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuth } from "../../hooks/auth";
import format from "date-fns/format";
import EditProfileModal from "./EditProfileModal";

export default function Profile() {
  const { id } = useParams();
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen: isOpenAvatar, onOpen: onOpenAvatar, onClose: onCloseAvatar } = useDisclosure();
  // const { isOpen: isOpenDetails, onOpen: onOpenDetails, onClose: onCloseDetails } = useDisclosure();

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">

      <Flex p={["4", "6"]} pos="relative" align="center">
        {/* displays user avatar */}
        <Avatar size="2xl" user={user} />
        {/* if the user is logged in and it's not loading, display this button */}
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

        {/* displays account  */}
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
        {/* button for opening a modal that lets you edit account details */}
        {!authLoading && authUser.id === user.id && (
          <EditProfileModal/>
        )}
        {/* <EditProfile isOpen={isOpenDetails} onclose={onCloseDetails} /> */}

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
            <Box>
              <Heading size='xs' textTransform='uppercase'>
              Meal plan
              </Heading>
              <Text pt='2' fontSize='sm'>
              {user.meal_plan}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}