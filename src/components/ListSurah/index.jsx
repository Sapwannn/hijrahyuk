import Link from "next/link";

const ListSurah = ({ api }) => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 md:px-48 px-8 hover:cursor-pointer">
            {api.data.map((surah, index) => {
                return (
                    <Link href={`/${surah.namaLatin}`} key={index}>
                        <div className="flex flex-row-reverse justify-between items-center hover:border-color-primary bg-white hover:bg-color-primary p-6 text-color-primary hover:text-white scale-100 hover:scale-[102%] transition-all rounded-lg shadow-lg">
                            <h1 className="md:text-3xl text-2xl font-medium">{surah.nama}</h1>
                            <div className="flex flex-row gap-2">
                                <h1 className="font-bold md:text-lg text-base">{surah.nomor}.</h1>
                                <div className="flex flex-col">
                                    <h2 className="md:text-xl text-lg font-semibold">{surah.namaLatin}</h2>
                                    <p className="md:text-sm text-xs italic text-gray-400">"{surah.tempatTurun}"</p>    
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
            
      </div>
    )
}



export default ListSurah;