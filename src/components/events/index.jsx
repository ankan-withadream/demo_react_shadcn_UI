import dimage from '@/assets/pexels-photo-5011647.jpeg'

const Events = () => {
    return (
        <div className="w-[90%] lg:grid lg:h-[200px] lg:grid-cols-2 xl:h-[200px] my-2">
            <div className="hidden bg-muted lg:block">
                <img
                    src={dimage}
                    alt="Image"

                    className="h-[200px] w-[90%] object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex">
                <p>hello</p>
            </div>

        </div>
    )
}

export default Events