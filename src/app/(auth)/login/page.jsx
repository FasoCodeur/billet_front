'use client'
// import {useLoginMutation} from "@/redux/features/auth/authApiSlice";
import {useState} from "react";
// import {useDispatch} from "react-redux";

const Page = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    // const dispatch = useDispatch()
    // const [login, { isLoading, error, success, isError }] = useLoginMutation();

    const handleChance= (e) => {
        const { name, value } = e.target; // Destructuration pour plus de clarté
        setUser((values) => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(user)

            // const response = await login(user).unwrap()
            // console.log(response)
        } catch (err) {
            console.log(err)
        }
        console.log(user)
    }

    return (
        <div className="p-5">
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-5 gap-3">
               <div className="flex gap-2 p-3">
                   <label htmlFor="email">Email</label>
                   <input id="email" type="text"
                          name='email'
                          placeholder="exemple@gmail.com" onChange={handleChance}
                   />
               </div>
                <div className="flex gap-2 p-3">
                    <label htmlFor="password">Password</label>
                    <input id='password' name='password' type="text" placeholder="password" onChange={handleChance}/>
                </div>


                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default Page;