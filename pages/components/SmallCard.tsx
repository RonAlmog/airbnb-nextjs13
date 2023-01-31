import Image from "next/image";

type Props = {
  location: Place;
};

function SmallCard({ location }: Props) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointe hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16 ">
        <Image src={location.img} fill className="rounded-lg" alt="" />
      </div>
      <div>
        <h2>{location.location}</h2>
        <h3 className="text-gray-500">{location.distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
