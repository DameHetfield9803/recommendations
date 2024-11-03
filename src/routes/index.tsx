import Card from "~/components/Card";

export default function Home() {
  return (
    <div class="mx-auto pt-16">
      <div class="lg:px-10 px-5">
        <h1 class="text-3xl mx-auto text-center">Prices are in $SGD!</h1>
        <ul class="mt-2">
          <li class="text-2xl text-center mb-1.5">For professional work</li>

          <div class="grid p-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-3 gap-2 mx-auto">
            <Card
              title="M4 Pro Macbook pro 14"
              imgSrc="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295"
              text="For professionals who work with videos and rendering"
              price={3349.00}
              link="https://www.apple.com/sg/shop/buy-mac/macbook-pro/14-inch-space-black-standard-display-apple-m4-pro-with-14-core-cpu-and-20-core-gpu-24gb-memory-1tb"
            />
            <Card
              title="M4 Pro Macbook pro 16"
              imgSrc="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507"
              text="For professionals who work with videos and rendering"
              price={3499.00}
              link="https://www.apple.com/sg/shop/buy-mac/macbook-pro/16-inch-space-black-standard-display-apple-m4-pro-with-14-core-cpu-and-20-core-gpu-24gb-memory-512gb"
            />
            <Card
              title="M4 Max Macbook pro 16"
              imgSrc="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507"
              text="For professionals who work with videos and rendering"
              price={5749.00}
              link="https://www.apple.com/sg/shop/buy-mac/macbook-pro/16-inch-space-black-standard-display-apple-m4-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb"
            />
            <Card
              title="Asus ProArt p16"
              imgSrc="https://sg.store.asus.com/media/catalog/product/cache/cfc1c40330ad6e57776b37bffeff4c51/p/r/proart_p16_h7606_product_photo_nano_black_05.png"
              text="For professionals who work with videos and rendering"
              price={4599}
              link="https://sg.store.asus.com/asus-proart-p16-oled-h7606wi-me123w.html"
            />
          </div>
          <li class="text-2xl text-center mb-1.5">For professionals who also game</li>
          <div class="p-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-3 gap-2 mx-auto">
            <Card
              title="Asus ROG Zephyrus G16"
              imgSrc="https://sg.store.asus.com/media/catalog/product/cache/cfc1c40330ad6e57776b37bffeff4c51/z/e/zephyrus_g16_ga605_white_02_copilot_l_rgb_0321.jpg"
              text="For professionals who want to work and game"
              price={4299.00}
              link="https://sg.store.asus.com/rog-zephyrus-g16-ga605wi-qr066w.html"
            />
            <Card
              title="Asus ROG Zephyrus G14"
              imgSrc="https://dlcdnwebimgs.asus.com/gain/3D241166-0518-4745-B481-D901886BFD14/w185/fwebp"
              text="For professionals who want to work and game"
              price={3099}
              link="https://sg.store.asus.com/rog-zephyrus-g14-2024.html"
            />
            <Card
              title="Lenovo Legion Pro 5i"
              imgSrc="https://p2-ofp.static.pub//fes/cms/2024/09/12/4pffcp8j4ta63nwc94x4wc3aywiv64732970.png"
              text="For professionals who want to work and game"
              price={2353}
              link="https://www.lenovo.com/sg/en/p/laptops/legion-laptops/legion-pro-series/legion-pro-5i-gen-9-16-inch-intel/83df007tsb"
            />
            <Card
              title="Lenovo Yoga Pro 9i (16, Gen 9)"
              imgSrc="https://p1-ofp.static.pub//fes/cms/2024/09/19/lq8nir4otd0pdue6sf5cf71y8rtebj467735.png"
              text="For professionals who want to work and game"
              price={2373.00}
              link="https://www.lenovo.com/sg/en/configurator/cto/index.html?bundleId=83DNCTO1WWSG1"
            />
            <Card
              title="HP OMEN Transcend 14"
              imgSrc="https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08872567.png"
              text="For professionals who want to work and game"
              price={2899.00}
              link="https://www.hp.com/sg-en/shop/omen-transcend-laptop-14-fb0128tx-b0cb4pa.html"
            />
          </div>
          <li class="text-2xl text-center mb-1.5">For light users who want the best battery life and least fan noise </li>
          <div class="p-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-3 gap-2 mx-auto">
            <Card
              title="Yoga Slim 7x Snapdragon X (14″, Gen 9)"
              imgSrc="https://p3-ofp.static.pub//fes/cms/2024/04/13/bpsbi1mbvuglzop5ttsv8a7uv7gpax544926.png"
              text="For professionals who want to use Windows and don't mind having a more limited set of applications."
              price={1761.00}
              link="https://www.lenovo.com/sg/en/p/laptops/yoga/ai-pc-series/yoga-slim-7x-gen-9-14-inch-snapdragon/len101y0049" />
            <Card
              title="Yoga Pro 7 Ryzen AI (14″, Gen 9)"
              imgSrc="https://p4-ofp.static.pub//fes/cms/2024/08/27/cve0elttp5r1b5dzfwue8zepv4erip058370.png"
              text="For professionals who want lesser fan noise but get the most app compatibility."
              price={1941}
              link="https://www.lenovo.com/sg/en/p/laptops/yoga/yoga-pro-series/lenovo-yoga-pro-7-gen-9-14-inch-amd/len101y0050"
            />
            <Card
              title="Macbook Air 13 M2"
              imgSrc="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
              text="For people who are okay with MacOS and want to have great battery life and NO fan noise"
              price={1399}
              link="https://www.apple.com/sg/shop/buy-mac/macbook-air/13-inch-midnight-apple-m2-chip-with-8-core-cpu-and-8-core-gpu-16gb-memory-256gb"
            />
            <Card
              title="Macbook Air 15 M3"
              imgSrc="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433"
              text="For people who are okay with MacOS and want to have fantastic battery life and NO fan noise, with a bigger screen"
              price={1899}
              link="https://www.apple.com/sg/shop/buy-mac/macbook-air/15-inch-midnight-apple-m3-chip-with-8-core-cpu-and-10-core-gpu-16gb-memory-256gb"
            />
          </div>
        </ul>
      </div>
    </div>
  )
}
