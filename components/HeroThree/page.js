'use client'
import Image from "next/image";

export default function HeroThreeBox({
    img,
    author,
    h2,
    para,
}){
    return(
        <>
        <div className="bg-white group">
            <div className="rounded-t-md w-full h-[220px]"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                
            </div>
            <div className="p-5 space-y-4">
                <small className="text-sm text-gray-400">{author}</small>
                <h2 className="group-hover:text-green-500 text-xl text-myblue">{h2}</h2>
                <p className="text-myblue">{para}</p>
            </div>

        </div>
        </>
    );
}