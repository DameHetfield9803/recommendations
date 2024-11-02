import Themeswitch from "./Themeswitch";
export default function Nav() {
  return (
    <div class="flex justify-center">
      <div class="fixed flex flex-col container mx-auto p-2">
        <div class="inline-flex space-x-6 text-lg bg-black p-3 mx-auto rounded dark:bg-white/30 backdrop-filter backdrop-blur-lg bg-opacity-15 hover:bg-opacity-15" >
          <a href="/">Home</a>
          <a href="/about">About</a>
          <Themeswitch />
        </div>
      </div>
    </div>
  );
}