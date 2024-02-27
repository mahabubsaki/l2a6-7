import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { useDeleteOneMutation, useGetALLQuery } from '../redux/features/goods/goodsAPI';
import { toast } from 'sonner';

const Supplies = () => {
    const { data, isLoading, refetch } = useGetALLQuery([]);
    const [deleteRelief] = useDeleteOneMutation();
    const handleDelete = async (id: string) => {
        const tid = toast.loading('Deleting releif post...');
        const data = await deleteRelief(id);
        if ((data as { error: { data: { message: string; }; }; }).error) {
            toast.error((data as { error: { data: { message: string; }; }; }).error.data.message, { id: tid });
            return;
        }
        toast.success('Relief post deleted', { id: tid });
        refetch();
    };
    return (
        <div>
            <h1 className='text-center text-3xl mb-4'>All Supplies : {data?.length ?? 0}</h1>
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
                                        <button className='bg-main text-white font-semibold px-6 py-2.5 rounded-full hover:bg-transparent border-main border hover:text-main duration-300'>Edit</button>
                                        <button onClick={() => handleDelete(supply._id)} className='bg-white text-main font-semibold px-6 py-2.5 rounded-full hover:bg-main border-main border hover:text-white duration-300 ml-2'>Delete</button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>}
            </div>
        </div>
    );
};

export default Supplies;