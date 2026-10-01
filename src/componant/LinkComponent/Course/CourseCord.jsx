
const CourseCord = ({ icon, title, description }) => {
  return (
    <div>
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 transition group-hover:scale-110">
          {icon}
        </div>

        <h3 className="mt-7 text-xl text-white font-bold">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </div>

  );
};

export default CourseCord;



