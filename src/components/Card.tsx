export default function Card({
    title,
    text,
    imgSrc,
    imgAlt,
    price,
    link
}: {
    title?: string,
    text?: string,
    imgSrc?: string,
    imgAlt?: string,
    price?: number,
    link?: string
}) {
    // Size-based class names
    // const sizeClasses = {
    //     small: "p-4 text-sm",
    //     medium: "p-6 text-base",
    //     large: "p-8 text-lg"
    // };

    return (
        <div class={`mt-2 dark:text-black border border-blue-500/40 bg-white rounded-md shadow-xl h-auto`}>
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={imgAlt ?? "Card image"}
                    class="w-full h-auto mb-4 rounded-md object-cover"
                />
            )}
            <div class="px-5 mb-5 mt-[-35px] text-wrap dark:text-black">
                <h1 class="text-2xl">{title ?? "default title"}</h1>
                <p class="mt-3">{text ?? "default text"}</p>
                <p class="mt-2 mb-5">Price: ${price ?? 0}</p>
                <a
                    target="_blank"
                    href={link}
                    class="block w-full px-4 py-2.5 bg-sky-700 text-white rounded-md font-normal text-center">
                    View product
                </a>
            </div>
        </div>
    );
}
