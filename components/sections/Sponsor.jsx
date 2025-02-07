import Image from "@node_modules/next/image"

const Logos = [
    {image : "/Sponsor-1.png"},
    {image : "/Sponsor-2.png"},
    {image : "/Sponsor-3.png"},
    {image : "/Sponsor-4.png"},
    {image : "/Sponsor-5.png"},
    {image : "/Sponsor-6.png"},
    {image : "/Sponsor-7.png"},
    {image : "/Sponsor-8.png"},
]
const Sponsor = () => {
  return (
    <section className="mt-[120px] py-[20px]">
        <div className="container">
            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center">
                {Logos.map((item , index)=>(
                    <div key={index}>
                        <Image src={item.image} alt="logo" width={150} height={75} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Sponsor