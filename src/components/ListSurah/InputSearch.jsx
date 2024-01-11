"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return;

        if(event.key === 'Enter' || event.type === 'click'){
            event.preventDefault()
            router.push(`/SearchSurah/${keyword}`)
        }

        
    }
    return (
        <div className="flex justify-center items-center px-48 py-4">
            <div className="relative">
                <input placeholder="Cari Surah apa?" ref={searchRef} onKeyDown={handleSearch} className="focus:outline-none focus:ring-2 ring-color-primary transition-all shadow-md border-solid border-color-primary rounded-lg text-center text-sm md:w-[78vw] w-[350px] h-[50px]"></input>
                <button className="absolute md:top-3 top-2 md:end-4 end-4" onClick={handleSearch}>
                    <MagnifyingGlass size={26} color="#616b7e"/>
                </button>
            </div>
        </div>
    )
}

export default InputSearch;