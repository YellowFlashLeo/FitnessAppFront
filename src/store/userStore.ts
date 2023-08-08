import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface UserQueryStore {
    email:string;
    addEmail:(emailDto:string)=> void;
    logout:()=>void;
}

const initialState = {
    email:""
}

const useStore = create<UserQueryStore>(set=>({
    email:"",
    addEmail:(emailDto:string)=>set(store=>({email:emailDto})),
    logout:()=>set(initialState)
}))

if (process.env.NODE_ENV === 'development'){
    mountStoreDevtool('Loging store', useStore);
}

export default useStore;