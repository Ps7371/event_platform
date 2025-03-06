import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import "../globals.css";

export default function Home() {
  return (
    <>
      <section className="bg-purple-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-16">

          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center gap-6 text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="text-lg text-gray-700 md:text-xl">
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
            />
          </div>

        </div>
      </section>




    </>

  );
}

// <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
//       <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
//         <div className="flex flex-col justify-center gap-8">
//           <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
//           <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
//           <Button size="lg" asChild className="button w-full sm:w-fit">
//             <Link href="#events">
//               Explore Now
//             </Link>
//           </Button>
//         </div>

//         <Image
//           src="/assets/images/hero.png"
//           alt="hero"
//           width={1000}
//           height={1000}
//           className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
//         />
//       </div>
//     </section>