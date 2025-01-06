import { Parallax } from "react-parallax";

export const SectionBanner = ({ image, title, para, height }) => {
  return (
    <Parallax bgImage={image} strength={500} blur={3}>
      <div
        className={`hero h-[${height}] relative flex flex-col items-center justify-center`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50  w-3/4 mx-auto h-1/2 my-auto"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-5 text-7xl font-bold textTitle">{title}</h1>
          <p className="mb-5 text-xl font-semibold textTitle">{para}</p>
        </div>
      </div>
    </Parallax>
  );
};
