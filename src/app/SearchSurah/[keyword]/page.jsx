import ListSurah from "@/components/ListSurah"
import Header from "@/components/ListSurah/Header"

const Page = async({ params }) =>{

  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/surat/?q=${keyword}`)
  const searchSurah = await response.json()

  return (
    <>
      <div>
        <Header/>
        <ListSurah api={searchSurah}/>
      </div>  
    </>
  )
}

export default Page;