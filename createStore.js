import { create } from "zustand";
import axios from "axios";

export const useStore = create((set, get) => ({
    RandomJoke: {},
    RandomJokeStatus: "",
    fetchRandomJoke: async() => ({
        set({RandomJokeStatus: PENDING'})
            try{
                const res = await axios.get('jokes/random')
                set({RandomJoke: res.data, RandomJokeStatus: 'SUCCESS'})
            }catch(err){
                set({RandomJokeStatus: 'FAILURE'})
                console.log(err)
            }
            }
    })
}))