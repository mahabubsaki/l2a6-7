import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';

import { useDeleteOneMutation, useGetALLQuery } from '../redux/features/goods/goodsAPI';
import { toast } from 'sonner';
import { useState } from 'react';
import PostOrPutGoods from '../components/reusable/PostOrPutGoods';
import { Link } from 'react-router-dom';

const Supplies = () => {
    const { data, isLoading, refetch, isError } = useGetALLQuery([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [edited, setEdited] = useState<null | { goal: number, collected: number, title: string, donaters: number, description: string; src: string; category: string; _id: string; }>(null);
    const [deleteRelief] = useDeleteOneMutation();
    const handleDelete = async (id: string) => {
        const tid = toast.loading('Deleting releif post...');
        const data = await deleteRelief(id);
        if ((data as { error: { data: { message: string; }; }; }).error) {
            toast.error('Unknown Error Occured', { id: tid });
            return;
        }
        toast.success('Relief post deleted', { id: tid });
        refetch();
    };
    if (isError) {
        return <div className='min-h-screen flex justify-center items-center text-3xl font-bold'>Unknown Error Occured</div>;
    }
    return (
        <div>
            <h1 className='text-center text-3xl mb-4'>All Supplies : {data?.length ?? 0}</h1>
            <div className='flex justify-end max-w-screen-xl'>
                <Link to={'/dashboard/create-supply'}>
                    <Button colorScheme='blue' onClick={onOpen}>Add New Supply</Button>
                </Link>
            </div>
            <div className='w-[95%] mx-auto'>
                {isLoading ? <h1>Loading...</h1> : <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>All of the supply information</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th isNumeric>Collected</Th>
                                <Th isNumeric>Goal</Th>
                                <Th isNumeric>Donaters</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((supply: { goal: number, collected: number, title: string, donaters: number, description: string; src: string; category: string; _id: string; }) => (
                                <Tr key={supply._id}>
                                    <Td>{supply.title}</Td>
                                    <Td>{supply.category}</Td>
                                    <Td isNumeric>{supply.collected}</Td>
                                    <Td isNumeric>{supply.goal}</Td>
                                    <Td isNumeric>{supply.donaters}</Td>
                                    <Td>
                                        <button onClick={() => {
                                            setEdited(supply);
                                            onOpen();
                                        }} className='bg-main text-white font-semibold px-6 py-2.5 rounded-full hover:bg-transparent border-main border hover:text-main dark:text-dark-main duration-300'>Edit</button>


                                        <Popover>
                                            <PopoverTrigger>
                                                <button className='bg-white dark:bg-purple-500 text-main dark:text-dark-main font-semibold px-6 py-2.5 rounded-full hover:bg-main border-main border hover:text-white duration-300 ml-2'>Delete</button>
                                            </PopoverTrigger>
                                            <PopoverContent className='text-black'>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverHeader>Confirmation!</PopoverHeader>
                                                <p className='my-5 px-5'>Are you sure you want to delete this?</p>
                                                <div className='px-5 flex justify-center mb-5'>
                                                    <Button colorScheme='red' onClick={() => handleDelete(supply._id)}>
                                                        Confirm Delete
                                                    </Button>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>}
            </div>
            <Modal isOpen={isOpen} onCloseComplete={() => setEdited(null)} size={'lg'} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Supply</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PostOrPutGoods refetch={refetch as () => void} onClose={onClose} id={edited?._id} defaultValus={edited} method='PUT' />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Supplies;