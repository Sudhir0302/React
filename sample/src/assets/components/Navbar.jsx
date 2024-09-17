const Navbar = ({appname}) => {
  return (
    <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center">
        {appname.name}
    </div>
  )
}

export default Navbar