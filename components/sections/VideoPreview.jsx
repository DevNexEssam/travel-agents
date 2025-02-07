import Image from "@node_modules/next/image"

const VideoPreview = () => {
  return (
    <section className="mt-[120px] py-[20px]">
        {/* FLEX */}
        <div className="flex flex-col gap-20 items-center justify-center">
            <div>
                <Image src="/Video.png" alt="VideoPreview" width={1878} height={500} quality={100} className="object-contain" />
            </div>
            <div>
            <Image src="/Scroll icon.png" alt="VideoPreview" width={100} height={100} />
            </div>
        </div>
    </section>
  )
}

export default VideoPreview