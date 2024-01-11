import ListDoa from "@/components/ListDoa"
import Header from "@/components/ListDoa/Header"

const DoaPage = async() =>{

    const response = await fetch(`${process.env.NEXT_DOA_API_BASE_URL}api`)
    const doa = await response.json()
  
    return (
      <div>
        <Header/>
        <ListDoa api={doa}/>
      </div>
    )
  }
  
  export default DoaPage;