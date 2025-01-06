export const Title = ({ title, para }) => {
  return (
    <div className="text-center mb-6 md:mb-12">
      <p className="text-[#D99904] italic text-base md:text-lg">{para}</p>
      <h2 className="text-2xl md:text-4xl border-t-4 border-b-4 w-9/12 md:w-1/2 lg:w-1/4 mx-auto py-4 mt-4">
        {title}
      </h2>
    </div>
  );
};
