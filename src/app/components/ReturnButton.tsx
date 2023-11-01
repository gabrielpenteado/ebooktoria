export const ReturnButton = ({ path }: { path: string | undefined }) => {
  return (
    <>
      <a
        href={path}
        className="w-full py-2  md:text-xl text-center text-white transition-colors duration-300 bg-purple-700 rounded-lg
     hover:bg-purple-800 ease px-5 md:px-9 md:w-auto cursor-pointer"
      >
        Return
      </a>
    </>
  );
};
