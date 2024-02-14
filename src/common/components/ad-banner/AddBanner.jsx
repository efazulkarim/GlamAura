import Image from "next/image";
import Link from "next/link";

const AddBanner = ({img, height, width, pClass}) => {
  return (
    <div className={`axil-banner ${pClass ? pClass : ""}`}>
      <div className="thumbnail">
        <Link href="#">
          <a>
            <Image
              src={img}
              alt='Add Banner'
              height={height ? height : 200}
              width={width ? width : 1230}
              placeholder="blur"
              blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AddBanner;
