import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAppSelector } from "../redux/store/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { usePostVolunteerMutation } from "../redux/features/volunteer/volunteerAPI";
import { toast } from "sonner";

interface X extends EventTarget {
    phone: { value: string; },
    address: { value: string; };
    reset: () => void;

}
const Volunteer = () => {
    const user = useAppSelector(selectCurrentUser);
    const [postVolunteer] = usePostVolunteerMutation();
    return (
        <div>
            <h1 className='text-center text-3xl mb-4'>Register as   Volunteer</h1>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as X;
                    const phone = target.phone.value;
                    const address = target.address.value;
                    toast.promise(postVolunteer({ phone, address, email: user?.email, name: user?.name, img: user?.photoURL }).unwrap(), {
                        loading: 'Posting...',
                        success: () => {
                            return 'Posted';
                        },
                        error: (err) => {
                            return err?.data?.message || 'Something went wrong';
                        },
                        finally: () => {
                            target.reset();
                        }
                    });


                }} className="max-w-lg mx-auto">
                    <FormControl className="flex flex-col gap-5">
                        <div>
                            <FormLabel>Email</FormLabel>
                            <Input name="designation" value={user?.email} disabled readOnly type='text' placeholder="Your designation e.g : CEO,Manager,CTO,Manager,etc" />
                        </div>
                        <div>
                            <FormLabel>Phone Number</FormLabel>
                            <Input name="phone" type='text' placeholder="Your phone number" />
                        </div>
                        <div>
                            <FormLabel>Address</FormLabel>
                            <Input name="address" type='text' placeholder="Your address" />
                        </div>
                        <Button colorScheme="orange" type="submit">Join</Button>
                    </FormControl>
                </form>
            </div>
        </div>
    );
};

export default Volunteer;