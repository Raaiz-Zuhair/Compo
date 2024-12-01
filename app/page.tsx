import HeroThreeBox from "@/components/HeroThree/page";
import HeroTwoBox from "@/components/HeroTwo/page";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="flex justify-center w-full bg-slate-50">
        <div className="w-10/12 my-20">
          <div className=" flex items-center lg:flex-row lg:justify-center flex-col lg:gap-0 gap-14">
            <div className="lg:w-1/2 w-full text-center lg:text-start">
              <h1 className="text-6xl font-semibold text-myblue">
                Next generation digital banking
              </h1>
              <p className="text-lg text-gray-500 my-8">
                Take your fiancial life online. Your Easybank account <br />
                will be a one-stop-shop for spending, saving, <br />
                budgeting, investing, and much more.
              </p>
              <Link href="/">
                <button className="py-3 px-8 bg-green-400 hover:ring hover:ring-mygreen hover:text-myblue rounded-full text-white  text-sm font-semibold">
                  Request Invite
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-[url('/heroimg2.jpg')] bg-cover bg-center w-full h-[600px] rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Two */}
      <section className="bg-slate-100 flex justify-center w-full">
        <div className="w-10/12 my-20">
          <div>
            <h1 className="text-4xl text-myblue">Why choose Easybank</h1>
            <div className="text-gray-400 my-8">
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub.
              </p>
              <p>Control your finances like never before.</p>
            </div>
          </div>
          <div className="grid grid-cols-4 space-x-6">
            <HeroTwoBox
              img={"/icon-api.svg"}
              txt1={"Online banking"}
              txt2={
                "Our modern web and mobile applications allow you to keep track of your fitness wherever you aree in the world."
              }
            />

            <HeroTwoBox
              img={"/icon-api.svg"}
              txt1={"Simple Budgeting"}
              txt2={`See exactly where your money goes each month. Receive notifications when you're close hitting your limits`}
            />

            <HeroTwoBox
              img={"/icon-api.svg"}
              txt1={"Fast Onboarding"}
              txt2={`We don't do branches. Open your account in minutes online and start talking control of your finances right away.`}
            />

            <HeroTwoBox
              img={"/icon-api.svg"}
              txt1={"Open API"}
              txt2={
                "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
              }
            />
          </div>
        </div>
      </section>

      {/* Hero Three */}
      <section className="bg-slate-50 flex justify-center w-full">
        <div className="w-10/12 my-20">
              <h1 className="text-4xl text-myblue mb-12">Latest Article</h1>
          <div className="grid grid-cols-4 gap-7">
            <HeroThreeBox
              img={"/image-currency.jpg"}
              author={"By Claris Robinson"}
              h2={"Receive money in any currency with no fees"}
              para={`The World is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`}
            />

            <HeroThreeBox
              img={"/image-restaurant.jpg"}
              author={"By Wilson Hutton"}
              h2={"Receive money in any currency with no fees"}
              para={`The World is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`}
            />

            <HeroThreeBox
              img={"/image-plane.jpg"}
              author={"By Claris Robinson"}
              h2={"Receive money in any currency with no fees"}
              para={`The World is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`}
            />

            <HeroThreeBox
              img={"/image-confetti.jpg"}
              author={"By Claris Robinson"}
              h2={"Receive money in any currency with no fees"}
              para={`The World is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
