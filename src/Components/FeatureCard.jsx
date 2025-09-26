function FeatureCard({ featuredata }) {
  return (
    <div className="container-box">
      <div className="flex flex-wrap justify-center lg:justify-between gap-10 py-5 ">
        {featuredata &&
          featuredata.map((val) => {
            return (
              <div
                key={val.id}
                className="flex flex-col max-w-[300px]  hover:scale-102 shadow-xl transition-all w-full items-center gap-2 p-8  border border-[#c0bbbbde] rounded-lg bg-blue-200 cursor-pointer"
              >
                {val.icon}

                <p className="text-xl font-semibold">{val.headtext}</p>
                <div>
                  <p className="text-xs text-center text-[#2f2020] font-semibold">
                    {val.Description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FeatureCard;
