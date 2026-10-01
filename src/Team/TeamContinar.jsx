import Team from "./Team"


const TeamContinar = () => {
  return (
    <>
    <div className=" flex flex-col items-center gap-4 my-16">
        <h3 className=" text-2xl font-bold w-32 h-10 flex items-center  justify-center  bg-green-500 rounded-xl text-black">Team</h3>
        <p className=" text-gray-700 p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt obcaecati perferendis. Voluptatem similique tempora expedita repudiandae cumque aliquam dolorum, illo aspernatur velit soluta dolorem, saepe, rem exercitationem itaque explicabo!
        </p>
    </div>
    <div className=" w-full gap-3 lg:grid-cols-3 sm:grid-cols-2 items-center p-2 grid grid-cols-1">
        <Team/>
        <Team/>
        <Team/>
        <Team/>
        <Team/>
        <Team/>
      
    </div>
    </>
  )
}

export default TeamContinar
