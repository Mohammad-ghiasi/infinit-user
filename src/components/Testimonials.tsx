import Link from "next/link";
// import SwiperItem from "./SwiperItem";
import axios from "axios";
import dynamic from 'next/dynamic';

const SwiperItem = dynamic(() => import('@/components/SwiperItem'), {
  ssr: false, // Disable server-side rendering for this component if needed
});

export default async function Testimonials() {
  const {data} = await axios.get("https://randomuser.me/api/?results=24");

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center">Our Clients</h2>
      <div className="mt-10 ">
        <SwiperItem data={data} />
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/users">
          <button className="px-6 py-3 text-gray-600 bg-gray-300 font-semibold rounded-lg hover:bg-gray-200">
            More Users
          </button>
        </Link>
      </div>
    </section>
  );
}
