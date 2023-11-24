import { Link } from "./Link";

const menuItems = [
  {
    id: "6fdb78ab-7975-4980-8f94-76e240413ddd",
    label: "Home",
    href: "#home",
  },
  {
    id: "55a91885-2512-4a87-bc16-87e5f0994d63",
    label: "Intro",
    href: "#intro",
  },
  {
    id: "ebfaed38-3319-4cfc-8066-f50744002082",
    label: "Games",
    href: "#category-games",
  },
  {
    id: "81a93346-8694-4ad9-acb4-c06d2bd46a23",
    label: "Tools",
    href: "#category-tools",
  },
  {
    id: "f2b3b1dc-e96b-47f8-bd26-90ffe7499a72",
    label: "Game Engines",
    href: "#category-engines",
  },
  {
    id: "b5c5da84-1577-4475-a713-eed996ce0cd9",
    label: "Outro",
    href: "#outro",
  },
  {
    id: "fa8bf3ac-3f78-457f-98c7-3890febba5d7",
    label: "Resumé",
    href: "https://richardmarks.us/resume.pdf",
  },
];

function MobileMenu() {
  return (
    <menu className="px-2.5 flex flex-col py-2.5 gap-y-2.5">
      {menuItems.map((menuItem) => {
        return (
          <li key={menuItem.id}>
            <Link
              className="text-2xl tracking-widest flex justify-center items-center min-h-[64px] text-semibold text-gray-200  text-center w-full py-2 rounded-sm bg-gray-500/10"
              href={menuItem.href}
              onClick={() => {
                const inputElement = document.querySelector("#mobile-menu");
                if (inputElement) {
                  inputElement.checked = !inputElement.checked;
                }
              }}
            >
              {menuItem.label}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

function MobileNav() {
  return (
    <nav className="sticky top-0 w-full h-[64px] z-50 bg-gray-900 lg:hidden flex">
      <label
        className="relative cursor-pointer px-3 py-6"
        htmlFor="mobile-menu"
      >
        <input className="peer hidden" type="checkbox" id="mobile-menu" />
        <div className="relative z-50 block top-[0.2rem] left-[0.2rem] md:left-[1rem] h-[4px] w-[34px] bg-white content-[''] before:absolute before:top-[-0.5rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.5rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
        <div className="fixed inset-0 z-40 hidden h-full w-full bg-gray-900/50 backdrop-blur-sm peer-checked:block">
          &nbsp;
        </div>
        <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 ease-in-out peer-checked:translate-x-0">
          <div className="float-right min-h-full w-[85%] bg-gray-800 shadow-2xl">
            <header className="w-full h-[64px] bg-gray-900 box-shadow-lg flex flex-row px-4 justify-center items-center">
              <h1 className="text-xl md:text-3xl text-gray-200 tracking-widest">
                projects.richardmarks.us
              </h1>
            </header>
            <MobileMenu />
          </div>
        </div>
      </label>
      <header className="w-full h-[64px] bg-gray-900 box-shadow-lg flex flex-row px-4 justify-center items-center">
        <h1 className="text-xl md:text-3xl text-gray-200 tracking-widest">
          projects.richardmarks.us
        </h1>
      </header>
    </nav>
  );
}

function DesktopMenu() {
  return (
    <menu className="flex flex-row gap-5 tracking-widest">
      {menuItems.map((menuItem) => {
        return (
          <li key={menuItem.id}>
            <Link
              className="text-xl text-semibold text-gray-200 inline-block text-center hover:text-green-500"
              href={menuItem.href}
            >
              {menuItem.label}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden lg:flex content-between items-center h-[64px] bg-gray-900 box-shadow-md px-4 sticky top-0 w-full z-50 opacity-90">
      <header className="flex-1">
        <h1 className="text-3xl tracking-widest">
          <a
            className="text-gray-200 inline-block text-center hover:text-green-500"
            href="https://projects.richardmarks.us"
          >
            projects.richardmarks.us
          </a>
        </h1>
      </header>
      <DesktopMenu />
    </nav>
  );
}

export function Nav() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}
