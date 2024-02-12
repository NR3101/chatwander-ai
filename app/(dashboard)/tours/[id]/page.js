import TourInfo from "@/components/TourInfo";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {
  const tour = await prisma.tour.findUnique({
    where: {
      id: params.id,
    },
  });

  const { data } = await axios(`${url}${tour.city}&per_page=4`);
  const tourImages = data?.results?.map((result) => result.urls.regular );

  return (
    <div>
      <Link href="/tours" className="btn btn-secondary mb-12">
        back to tours
      </Link>

      {tourImages && tourImages.length > 0 ? (
        <div className="flex gap-5 justify-evenly">
          {tourImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={180}
              height={180}
              className="rounded-xl shadow-xl mb-16 h-64 w-64 object-cover"
              alt={tour.title}
              priority
            />
          ))}
        </div>
      ) : null}

      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
