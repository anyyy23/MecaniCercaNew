export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8">
            <h2 className="text-xl font-bold text-blue-900 px-8 ">
                MecaniCerca
                </h2>
                <div className="flex gap-6 text-blue-900 px-8 my-2">
                    <a href="#features">Características</a> 
                    <a href="#about">Nosotros</a> 
                    <a href="#emergency">Emergencia 911</a>
                </div>
        </nav>
    )
}