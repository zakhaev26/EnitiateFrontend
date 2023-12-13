"use client"
import React, { useEffect, useState } from 'react'
import { useUserSession } from "@/app/store/userSession"

const Zustand = () => {
    const { posts, addPosts } = useUserSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");

                const data = await res.json()
                addPosts(data);
            }catch(e) {
                console.log(e.message);
            }
        }

        fetchData();

    }, [])


    // const [newUser, setNewUser] = useState({
    //     name: "",
    //     branch: "",
    //     favLang: ""
    // });
    return (
        <>
            <h1>Using Zustand To Fetch And store in Zustand store </h1>

            {
                posts.map((post) =>{
                    console.log(post.id);
                })
            }

        </> 
    )
}
//     return (
//         <div>
//             Zustand Example

//             {
//                 users.map((user) => {
//                     return (
//                         <h1>{user.name} : {user.branch} : {user.favLang}</h1>
//                     )
//                 })
//             }

//             <form action="">
//                 <input type="text" style={{ backgroundColor: "grey" }} placeholder="Name" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />

//                 <input type="text" style={{ backgroundColor: "grey" }} placeholder="Branch" onChange={(e) => setNewUser({ ...newUser, branch: e.target.value })} />

//                 <input type="text" style={{ backgroundColor: "grey" }} placeholder='Lang' onChange={(e) => setNewUser({ ...newUser, favLang: e.target.value })} />
//                 <button type="submit" onClick={(e) => {
//                     e.preventDefault();
//                     addUser(newUser);
//                 }}>Add User</button>
//             </form>


//             {console.log("Zustand Store : ", users)};

//         </div>
//     )
// }

export default Zustand