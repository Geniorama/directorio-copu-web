import React from "react";

interface HeadingCompanyProps {
  cover?: string;
  imgProfile: string;
  name: string;
  slogan?: string;
  categories?: string[];
  bgImageProfileColor?: string;
}

export default function HeadingCompany(props: HeadingCompanyProps) {
  return (
    <div>
      <div className={`${props.cover === undefined && 'lg:mb-28'}`}>
        {props.cover && props.cover !== "" && (
          <img
            src={props.cover}
            className="w-full aspect-[16/6] object-cover rounded-3xl overflow-hidden"
            alt=""
          />
        )}
      </div>

      <div
        className={`${
          props.imgProfile !== "" ? "md:mt-[-90px]" : ""
        } text-center mt-5`}
      >
        {props.imgProfile !== "" ? (
          <div
            className={`${props.bgImageProfileColor} relative w-[170px] aspect-square mx-auto p-5 rounded-full overflow-hidden`}
          >
            <img
              className="w-[170px]  md:w-[180px] aspect-square object-contain rounded-full mx-auto"
              src={props.imgProfile}
              alt=""
            />
          </div>
        ) : (
          <div className="mt-16"></div>
        )}

        <div className="my-3 text-[#C7C7DF]">
          <h1 className="font-bold text-2xl">{props.name}</h1>
          {props.slogan && <p className="text-lg">{props.slogan}</p>}

          {props.categories && (
            <span className="text-xs">{props.categories.join(", ")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
