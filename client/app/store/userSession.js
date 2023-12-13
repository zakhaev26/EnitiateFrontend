import { create } from "zustand"

export const useUserSession = create((set) => ({
/*    users: [
        {
            name:"Soubhik",
            branch:"IT",
            favLang:"8085 ASM"
        },
        {
            name:"Divya",
            branch:"CSE",
            favLang:"Java"
        }
    ],

    addUser: (newUser) => {
        set((state) => {
            return  {users : [...state.users,newUser]}
        })
    }
*/

    posts: [],
    addPosts: (newPostArr) =>{
        set((state) =>{
            return {posts: [...state.posts,...newPostArr ]}
        })
    }
}))