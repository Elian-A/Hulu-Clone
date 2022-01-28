export default function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col mx-2 items-center justify-center group w-14">
      <Icon className="group-hover:animate-bounce" size={30} />
      <p className="opacity-0 group-hover:opacity-100 ">{title}</p>
    </div>
  );
}
