import WorkQustion from "./WorkQustion"


const WorkProcess = () => {
  return (
    <>
    <div className="w-full h-auto flex  items-center justify-center gap-5 mt-16">
        <h2 className="text-2xl font-bold w-[20%]">Our Working Process</h2>
        <p className="w-[80%]">
            Our working process is designed to ensure that we deliver high-quality results to our clients. We start by understanding the client's needs and requirements, 
        </p>
    </div>
    <div className="w-full h-auto p-4 flex flex-col items-start justify-start gap-5 mt-10">
        <WorkQustion />
        <WorkQustion />
        <WorkQustion />
        <WorkQustion />
        <WorkQustion />
        <WorkQustion />
    </div>
    </>
  )
}

export default WorkProcess
