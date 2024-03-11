import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useAppSelector } from "../redux/store/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { usePostTestimonialMutation } from "../redux/features/testimonial/testimonialAPI";
import { toast } from "sonner";

interface X extends EventTarget {
    designation: { value: string; },
    feedback: { value: string; };
    reset: () => void;

}

const CreateTestimonial = () => {
    const user = useAppSelector(selectCurrentUser);
    const [postTestimonial] = usePostTestimonialMutation();
    return (
        <div>
            <h1 className='text-center text-3xl mb-4'>Create Testimonial</h1>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if ((e.target as X).feedback.value.length > 180 || (e.target as X).designation.value.length > 20) return toast.error('Designation should be less than 20 characters and feedback should be less than 180 characters');
                    toast.promise(postTestimonial({ position: (e.target as X).designation.value, review: (e.target as X).feedback.value, name: user?.name, img: user?.photoURL }).unwrap(), {
                        loading: 'Posting...',
                        success: () => {
                            return 'Posted';
                        },
                        error: (err) => {
                            return err.status;
                        },
                        finally: () => {
                            (e.target as X).reset();
                        }
                    });
                }} className="max-w-lg mx-auto">
                    <FormControl className="flex flex-col gap-5">
                        <div>
                            <FormLabel>Designation</FormLabel>
                            <Input name="designation" type='text' placeholder="Your designation e.g : CEO,Manager,CTO,Manager,etc" />
                        </div>
                        <div>
                            <FormLabel htmlFor="feedback">Comments</FormLabel>
                            <Textarea name="feedback" id="feedback" placeholder="Your feedbacks" minH={'300px'} resize={'none'} />
                        </div>
                        <Button colorScheme="orange" type="submit">Submit</Button>
                    </FormControl>
                </form>
            </div>
        </div>
    );
};

export default CreateTestimonial;