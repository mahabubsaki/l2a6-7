import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleQuery, useUpdateOneMutation } from '../redux/features/goods/goodsAPI';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip, useDisclosure } from '@chakra-ui/react';
import { toast } from 'sonner';

export interface ReliefInterFace {
    goal: number, collected: number, title: string, donaters: number, description: string; src: string; category: string; _id: string;
}

const SingleReliefGood = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { id } = useParams();
    const { data, isError, isLoading, error, refetch } = useGetSingleQuery(id);
    const [sliderValue, setSliderValue] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const [updateOne] = useUpdateOneMutation();
    const navigate = useNavigate();

    const data2 = data as ReliefInterFace;
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center text-3xl font-bold'>Loading...</div>;
    }

    if (isError) {
        return <div className='min-h-screen flex justify-center items-center text-3xl font-bold'>{(error as { data: { message: string; }; }).data?.message || 'Unknown Error'}</div>;
    }

    return (
        <div>
            <figure className='aspect-video max-w-screen-lg mx-auto'>
                <img src={data2.src} alt="" className='w-full h-full' />
            </figure>
            <div className='max-w-screen-md mx-auto'>
                <h1 className='text-4xl font-semibold text-center'>{data2.title}</h1>
                <h2 className='text-lg font-semibold text-center text-[#9c9c9c]'>{data2.category}</h2>
                <div className='flex justify-center gap-2.5  font-semibold'>
                    <p className='text-[#9c9c9c]'>Collected : {data2.collected}</p>
                    <p className='text-main'>Goal : {data2.goal}</p>
                </div>
                <p className='] text-[#9c9c9c] text-center'>{data2.description}</p>
                <div className='flex gap-6 flex-wrap justify-center my-4'>
                    <Button aria-disabled={data2.goal - data2.collected === 0} onClick={onOpen} colorScheme='orange' >Donate</Button>
                </div>
            </div>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Donation Confirmation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Slider id='slider'
                            defaultValue={0}
                            min={0}
                            max={data2.goal - data2.collected}
                            colorScheme='teal'
                            onChange={(v: number) => setSliderValue(v)}
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >

                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg='teal.500'
                                color='white'
                                placement='top'
                                isOpen={showTooltip}
                                label={`${sliderValue} Pieces`}
                            >
                                <SliderThumb />
                            </Tooltip>
                        </Slider>
                        <div>
                            <p> Donation Item : {data2.title}</p>
                            <p> Quantity : {sliderValue} </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button aria-disabled={sliderValue === 0} colorScheme='green' mr={3} onClick={async () => {
                            const tid = toast.loading('Donation Processing...', { onAutoClose: () => navigate('/dashboard') });
                            const result = await updateOne({ ...data2, collected: data2.collected + sliderValue });

                            if ((result as { error: { data: { message: string; }; }; }).error) {
                                toast.error('Unkown Error Occured', { id: tid });
                                return;
                            }
                            await refetch();
                            toast.success('Successfully donated', { id: tid });
                            onClose();

                        }}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default SingleReliefGood;