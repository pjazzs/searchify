import Logo from "./Logo";

const Header = () => {
    return ( 
        <>
        <div className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10 font shadow">
           
           <div className="flex items-center justify-between"> <Logo/> <marquee className='marq font'>Search-smart</marquee></div>
            <div className="flex items-center justify-between shadow">
                        <h1>Context-smart Aware Search Engine</h1>
                        <p>Supervisor: Mrs. Cookey I.B</p>
            </div>

        
        </div>
        </>
     );
}
 
export default Header;