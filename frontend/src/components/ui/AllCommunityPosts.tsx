
import { Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { TUser } from '../../redux/features/auth/authSlice';
import { useGetAllComunityQuery, useGetSingleCommunityQuery } from '../../redux/features/community/communityAPI';
import { formatRelative } from 'date-fns';
import LiveTimer from './LiveTimer';
import { useRef, useState } from 'react';

const AllCommunityPosts = () => {
    const [id, setId] = useState('');
    const { data, isError, isLoading } = useGetAllComunityQuery([]);
    const { data: singleData = null, isLoading: singleDataLoading, isError: singleDataData } = useGetSingleCommunityQuery(id, { skip: !id });
    console.log(singleData);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleComment = (value: string) => {
        console.log(value);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error Occured</div>;
    }
    return (
        <div className='flex flex-col gap-10'>

            <Modal isOpen={isOpen} onClose={onClose} onCloseComplete={() => setId('')}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{singleData ? singleData.title : ''}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {singleDataLoading ? <div>Loading...</div> : null}
                        {singleDataData ? <div>Error Occured</div> : null}
                        {singleData ? <><div className='flex gap-4 items-center'>
                            <Image src={singleData.user.photoURL} width={50} height={50} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg font-bold'>{singleData.user.name}</p>
                                <p className='text-xs'>Posted <LiveTimer time={singleData.timestamp} /></p>
                            </div>

                        </div>
                            <div className='my-8'>
                                <p
                                    dangerouslySetInnerHTML={{ __html: singleData.content }}
                                />

                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>Comments</h1>

                                <div className='max-h-[400px] min-h-[200px] overflow-auto'>

                                </div>
                                <form onSubmit={(e) => {
                                    e.preventDefault();


                                    handleComment(e.target.comment.value);

                                }} className='flex items-center gap-4'>
                                    <Input name='comment' type="text" placeholder='Write your comment' onKeyUp={(e) => {
                                        if (e.key === 'Enter') {
                                            buttonRef.current?.click();
                                        }
                                    }} />
                                    <Button ref={buttonRef} colorScheme='whatsapp' type='submit'>Comment</Button>
                                </form>
                            </div> </> : null}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>

            {data?.map((post: { _id: string, title: string, content: string; user: TUser; timestamp: Date; }) => (
                <div key={post._id} className='border border-stone-200 rounded-2xl p-5'>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex gap-4 items-center'>
                            <Image src={post.user.photoURL} width={50} height={50} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg font-bold'>{post.user.name}</p>
                                <p className='text-xs'>Posted <LiveTimer time={post.timestamp} /></p>
                            </div>

                        </div>
                        <div className='text-xs'>
                            {formatRelative(new Date(post.timestamp), new Date())
                            }
                        </div>
                    </div>
                    <div className='pl-5 mb-8'>
                        <h1 className='mb-8  text-2xl'>Title : <span className='font-bold italic'>{post.title}</span></h1>

                        <div>
                            <p dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Button onClick={() => {
                            onOpen();
                            setId(post._id);
                        }} colorScheme='whatsapp'>Comment Now!</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllCommunityPosts;