import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function contact() {
  return (
    <main>
      {/* map,contact */}
      <section className="bg-slate-50 flex justify-center w-full">
        <div className="w-10/12 lg:my-20 my-12">
          <div className="flex lg:flex-row lg:items-center flex-col justify-center gap-8">
            <div className="lg:w-1/2 w-full ">  
              {/* Contact div */}
              <div className=" flex flex-col">
                <div className="text-center mb-4">
                  <h1 className="text-myblue lg:text-5xl text-4xl lg:mb-0 mb-2 font-semibold">
                    Contact Us
                  </h1>
                  <p className="text-gray-500 ">
                    We'd love to hear from you! Reach out through any of the
                    following
                  </p>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="text-myblue flex flex-col justify-center items-center gap-1 ">
                    <CiLocationOn className="text-[30px]" />
                    <h2 className="font-semibold text-lg">Address</h2>
                    <p className="font-semibold text-center lg:text-start">
                      123 Innovation Ave, Suite 400, San Francisco, CA 94105
                    </p>
                  </div>
                  <div className="text-myblue flex flex-col justify-center items-center gap-1 ">
                    <FiPhone className="text-[30px]" />
                    <h2 className="font-semibold text-lg">Phone</h2>
                    <Link href="tel:+94769436537">
                      <p className="font-semibold text-center lg:text-start">
                        +94769436537 / +940652246819
                      </p>
                    </Link>
                  </div>
                  <div className="text-myblue flex flex-col justify-center items-center gap-1 ">
                    <MdOutlineEmail className="text-[30px]" />
                    <h2 className="font-semibold text-lg">Email</h2>
                    <p className="font-semibold text-center lg:text-start">
                      easybank321@gmail.com / easybank231@yahoo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* map div */}
              <div>
                <iframe
                  className="rounded-lg w-full h-64 sm:w-3/4 sm:h-80 lg:w-full lg:h-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0656709672444!2d79.86579387408594!3d6.8827367931162025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b21c4ad9c7f%3A0x2db603e21bdfd4f9!2sHavelock%20City%20Mall!5e0!3m2!1sen!2slk!4v1730985214753!5m2!1sen!2slk"
                  width="600"
                  height="500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
