import Team from "./Team"


const TeamContinar = () => {
  return (
    <>
    <div className=" flex gap-4 my-16">
        <h3 className=" text-2xl font-bold p-3 bg-green-500 rounded-xl text-black">Team</h3>
        <p className=" text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt obcaecati perferendis. Voluptatem similique tempora expedita repudiandae cumque aliquam dolorum, illo aspernatur velit soluta dolorem, saepe, rem exercitationem itaque explicabo!
        </p>
    </div>
    <div className=" grid grid-cols-3 gap-4">
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
