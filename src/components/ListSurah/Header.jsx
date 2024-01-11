import InputSearch from "./InputSearch";

const Header = () => {
    return (
        <div className="md:px-48 px-8 md:py-4 py-4 text-xl font-semibold">
            <div className="flex flex-col justify-between">
                <h1>AlQuran Online</h1>
                <InputSearch/>
            </div>
        </div>
    )
}

export default Header;