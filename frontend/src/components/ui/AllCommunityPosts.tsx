
import { Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { TUser, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useGetAllComunityQuery, useGetSingleCommunityQuery, usePostCommentMutation } from '../../redux/features/community/communityAPI';
import { formatRelative } from 'date-fns';
import LiveTimer from './LiveTimer';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { useAppSelector } from '../../redux/store/hooks';
interface X extends EventTarget {
    comment: { value: string; },


}
const AllCommunityPosts = () => {
    let timeout1: number | undefined, timeout2: number | undefined;
    const [id, setId] = useState('');
    const { data, isError, isLoading, refetch } = useGetAllComunityQuery([]);
    const user = useAppSelector(selectCurrentUser);
    const { data: singleData, isLoading: singleDataLoading, isError: singleDataData, refetch: refetchSingle } = useGetSingleCommunityQuery(id, { skip: !id });
    console.log(singleData, id);
    const [postComment] = usePostCommentMutation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const commentref = useRef<HTMLDivElement>(null);


    // useEffect(() => {
    //     if (id) {
    //         refetchSingle();
    //     }
    // }, [id]);

    const handleComment = (value: string) => {
        if (!value) {
            return toast.error('Please fill the comment field');
        }
        toast.promise(postComment({ comment: value, community: id, user: user?._id }).unwrap(), {
            loading: 'Posting...',
            success: () => {

                refetch();
                refetchSingle();


                return 'Posted';
            },
            error: (err) => {
                return err.status;
            },
            finally: () => {

                timeout1 = setTimeout(() => {
                    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
                    formRef.current?.reset();
                }, 100);
            }
        });
    };
    useEffect(() => {
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                            <Image src={singleData.user.photoURL} onError={(e) => e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png'} width={50} height={50} />
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
                                <h1 className='text-xl font-bold mb-4'>Comments</h1>

                                <div ref={commentref} className='max-h-[400px] min-h-[200px] flex flex-col gap-5 overflow-auto mb-8'>
                                    {
                                        singleData.comments?.map((comment: { _id: string, comment: string, user: TUser[], timestamp: Date; }) => (
                                            Object.values(comment).length > 2 ? <div key={comment._id} className='border border-stone-200 rounded-2xl p-5'>
                                                <div className='flex gap-4 items-center'>
                                                    <Image src={comment.user[0].photoURL} onError={(e) => e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png'} width={50} height={50} />
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='text-lg font-bold'>{comment.user[0].name}</p>
                                                        <p className='text-xs'>Commented <LiveTimer time={comment.timestamp} /></p>
                                                    </div>

                                                </div>
                                                <div className='my-8'>
                                                    <p
                                                        dangerouslySetInnerHTML={{ __html: comment.comment }}
                                                    />

                                                </div>
                                            </div> : null
                                        ))
                                    }
                                    <div ref={scrollRef} />
                                </div>
                                <form ref={formRef} onSubmit={(e) => {
                                    e.preventDefault();


                                    handleComment((e.target as X).comment.value);


                                }} className='flex items-center gap-4'>
                                    <Input name='comment' type="text" placeholder='Write your comment' />
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

            {data?.map((post: { _id: string, title: string, content: string; user: TUser; timestamp: Date; comments: unknown[]; }) => (
                <div key={post._id} className='border border-stone-200 rounded-2xl p-5'>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex gap-4 items-center'>
                            <Image src={post.user.photoURL} onError={(e) => e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png'} width={50} height={50} />
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
                    <div className='flex justify-end items-center gap-4'>
                        <p className='text-xs'>{post.comments.length} comments</p>
                        <Button onClick={() => {
                            onOpen();

                            setId(post._id);
                            timeout2 = setTimeout(() => {
                                scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
                                formRef.current?.reset();
                            }, 100);
                        }} colorScheme='whatsapp'>Comment Now!</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllCommunityPosts;