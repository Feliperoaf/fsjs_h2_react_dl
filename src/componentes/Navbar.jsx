import { formatCLP } from '../utils/formatCLP';

const Navbar = () => {
  const total = 25000;
  const token = true;

  const navButton = "border rounded-xl m-2 px-3 py-1"

  return (
    <div className=' bg-black/88 flex items-center justify-between p-2'>
      <div className='flex items-center text-white'>
        <h4 className='flex items-center mr-3 ml-4 font-bold'>Pizzería Mamma Mia!</h4>
        <button className={navButton}>🍕Home</button>
        {token ? (
          <>
          <button className={navButton}>🔓Profile</button>
          <button className={navButton}>🔒Logout</button>
          </> ) : ( <> 
          <button className={navButton}>🔐Login</button>
          <button className={navButton}>🔐Register</button>
          </>
        )}        
      </div>
          <button className={`${navButton} text-cyan-500`}>🛒Total: ${formatCLP(total)}</button>
    </div>
  )
}

export default Navbar