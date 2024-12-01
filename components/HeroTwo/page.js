'use client'

import Image from "next/image";

export default function HeroTwoBox({
    img,
    txt1,
    txt2,
}){
    return(
        <>
        <div className="flex flex-col gap-3">
            <div >
                <Image
                src={img}
                alt="image"
                width={50}
                height={50}
                />
            </div>
            <h1 className="text-myblue text-2xl">{txt1}</h1>
            <p className="text-gray-400">{txt2}</p>
        </div>
        </>
    );
}