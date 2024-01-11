import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-color-primary sticky top-0 w-full z-[99999]">
            <div className="flex md:flex-row flex-col justify-between items-center py-6 md:px-48 px-12 md:gap-7 gap-4">
                <Link href={'/'} className="font-bold text-white md:text-2xl text-xl">HijrahYuk!</Link>
                    <div className="flex flex-row justify-between gap-3 text-color-primary cursor-pointer">
                        <div className="bg-white transition-all scale-100 hover:scale-105 rounded-md">
                            <Link href={'/KumpulanDoa'}>
                                <h1 className="p-3 text-sm font-medium">Kumpulan Doa</h1>
                            </Link>
                        </div>
                        <div className="bg-white transition-all scale-100 hover:scale-105 rounded-md">
                            <Link href={'/Hadist'}>
                                <h1 className="p-3 text-sm font-medium">Hadist</h1>
                            </Link>
                        </div>
                    </div>
            </div>
         </header>
    )
}

export default Navbar;