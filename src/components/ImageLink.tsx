import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ImageLinkProps = {
  path: string;
  img: StaticImageData;
  label: string;
};

const ImageLink = ({ path, img, label }: ImageLinkProps) => {
  return (
    <Link
      href={path}
      className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer w-[500px]"
    >
      <Image src={img} alt={label} width={400} height={400} />
      <p className="text-white">{label}</p>
    </Link>
  );
};

export default ImageLink;
