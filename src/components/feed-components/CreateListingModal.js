import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'

import CreateListing from './CreateListing'

function CreateListingModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button w="full" colorScheme='purple' onClick={onOpen}>Post A Listing!</Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <CreateListing onClose={onClose} />
                </ModalContent>
            </Modal>

        </>
    )
}

export default CreateListingModal;