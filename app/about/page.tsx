import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <main>
      {/* About Us */}
      <section className="bg-slate-50 flex justify-center w-full">
        <div className="w-10/12 my-20">
          <div className="flex justify-center lg:flex-row flex-col  items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-center text-myblue text-5xl font-semibold mb-6">
                About Us
              </h1>
              <p className="text-gray-500 lg:text-start text-center text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, ipsam error vero adipisci tenetur aliquam totam
                recusandae ducimus tempora, neque officiis assumenda? Excepturi,
                natus, quaerat consequatur eos sed quam asperiores illo numquam
                officia accusamus similique laborum explicabo molestias placeat
                minus officiis neque rerum, voluptatum quis? Laudantium porro
                qui, nulla maxime vitae aperiam veniam ab eveniet, doloribus eum
                ea quae ducimus inventore, quo nostrum? Repellendus aliquam
                nulla nemo accusantium illo veritatis est eaque quasi ea
                voluptates, suscipit sit, dolore tempora perferendis ab amet
                quia quam nobis similique illum fugit alias! Consequatur
                temporibus odio nulla placeat deserunt ut eveniet nam laudantium
                modi.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-[url('/heroimg1.jpg')] bg-cover bg-center w-full h-[600px] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
      {/* our story */}
      <section className="flex justify-center w-full bg-white">
        <div className="w-10/12 my-20">
          <h1 className="text-center text-myblue text-5xl font-semibold lg:mb-14 mb-8">
            Our Story
          </h1>
          <div className="flex lg:items-center lg:flex-row flex-col justify-center lg:gap-8 gap-0" >
            <div className="lg:w-1/2 w-full">
              <div className="rounded">
                <iframe
                  className="rounded-lg w-full h-48 sm:h-64 md:h-80"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/swJ-g4Cr0MU?si=WRAUZPC2z8JuQo8h"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:text-start mt-6 lg:mb-0 text-center">
              <p className="text-lg  text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, quibusdam porro quos eveniet sunt itaque voluptas
                maxime inventore. Consequuntur unde harum quae aliquam
                explicabo, id architecto culpa officiis beatae autem hic fugiat
                sit neque repellat incidunt rerum adipisci, fugit velit commodi,
                consectetur dolor iusto natus. Dolore illum provident dicta enim
                earum quisquam assumenda repellendus totam aut esse asperiores,
                quod sit doloremque similique tempora expedita minima id
                blanditiis porro accusamus incidunt eveniet. Reiciendis sequi
                natus rerum obcaecati, quisquam vel et possimus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
