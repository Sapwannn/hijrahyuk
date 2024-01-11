import ListSurah from "@/components/ListSurah"
import Welcome from "@/components/Welcome"
import Header from "@/components/ListSurah/Header"

const Home = async() =>{

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/surat`)
  const surah = await response.json()

  return (
    <div>
      <Welcome/>
      <Header/>
      <ListSurah api={surah}/>
    </div>
  )
}

export default Home;