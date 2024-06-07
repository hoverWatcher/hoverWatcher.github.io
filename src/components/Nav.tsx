import { Link } from "react-router-dom";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";

const Nav = () => {
    return (
        <div className="flex h-screen w-full justify-center pt-20">
            <div className="flex gap-8">
                <Link
                    to={"/about"}
                    className="text-sm/6 font-semibold text-white/50"
                >
                    About
                </Link>
                <Popover>
                    <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                        Works
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <PopoverPanel
                            anchor="bottom"
                            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)]"
                        >
                            <div className="p-3">
                                <a
                                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                                    href="#"
                                >
                                    <p className="font-semibold text-white">
                                        Client Works
                                    </p>
                                    <p className="text-white/50">
                                        Measure actions your users take
                                    </p>
                                </a>
                                <a
                                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                                    href="#"
                                >
                                    <p className="font-semibold text-white">
                                        Personal projects
                                    </p>
                                    <p className="text-white/50">
                                        Create your own targeted content
                                    </p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Transition>
                </Popover>
                <Link
                    to={"/social"}
                    className="text-sm/6 font-semibold text-white/50"
                >
                    Social
                </Link>
            </div>
        </div>
    );
};

export default Nav;
