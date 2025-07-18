import { Link } from "react-router-dom"
import { useState, type ChangeEvent } from "react";
import type { SignupInput } from "@skandesh_k_k/blog-website-common";

export const Auth =({type}: {type: "signin" |"signup"}) =>{
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name :"",
        email: "",
        password:""
    })
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>

            
            <div>
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">
                    Already have an account?
                    <Link className="pl-2 underline" to={"/signin"} >Login</Link>
                </div>
            </div>
            {/* <LabelledInput label="Name" placeholder="Skandesh" onChange={(e) =>{

            }} /> */}
            <div>
                <LabelledInput label="Name" placeholder="skandesh.." onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                }} />
                <LabelledInput label="email" placeholder="xyz@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="cjdnjcd" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                }} />
            </div>
            
            </div>

        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}