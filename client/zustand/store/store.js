import { create } from "zustand"

export const usePostSession = create((set) => ({
        
    posts: [],            
    addPosts: (apiPostsArr) => {
        console.log("zs",apiPostsArr)
        /**apiPostsArr is a Array of Objects fetched from API */
           set((state) => {
           return { posts: [...state.posts,...apiPostsArr] }
        })
    }
}))