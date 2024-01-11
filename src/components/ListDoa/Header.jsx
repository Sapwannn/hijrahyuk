import InputSearchDoa from "./InputSearchDoa";
const Header = () => {
    return (
        <div className="md:px-48 px-8 md:py-6 py-4 text-xl font-semibold">
            <div className="flex flex-col justify-between">
                <h1>Kumpulan Doa Sehari-hari</h1>
                <InputSearchDoa/>
            </div>
        </div>
    )
}

export default Header;