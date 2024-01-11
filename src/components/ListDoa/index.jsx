import Link from "next/link";

const ListDoa = ({ api }) => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 md:px-48 px-8 hover:cursor-pointer">
            {api.map((doa, index) => {
                return (
                    <Link href={`/${doa.id}`} key={index}>
                        <div className=" hover:border-color-primary bg-white hover:bg-color-primary p-6 text-color-primary hover:text-white scale-100 hover:scale-[102%] transition-all rounded-lg shadow-lg">
                            <div className="flex flex-row gap-4 items-center">
                                <h1 className="font-semibold">{doa.id}.</h1>
                                <h1 className="font-bold">{doa.doa}</h1>
                            </div>
                        </div> 
                    </Link>
                )
            })}
            
      </div>
    )
}



export default ListDoa;