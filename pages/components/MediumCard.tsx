import Image from "next/image";

type Props = {
  liveAnywherePlace: LiveAnywherePlace;
};

function MediumCard({ liveAnywherePlace }: Props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          fill
          src={liveAnywherePlace?.img}
          className="rounded-xl"
          alt=""
        />
      </div>
      <h3 className="text-2xl mt-3">{liveAnywherePlace?.title}</h3>
    </div>
  );
}

export default MediumCard;
