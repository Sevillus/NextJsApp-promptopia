"use client"

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {getProviders} from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    // tutaj skonczylem

    return (
        <nav className={"flex-between w-full mb-16 pt-3"}>
            <Link href="/" className={"flex gap-2 flex-center"}>
                <Image
                    src={"/assets/images/logo.svg"}
                    alt={"Promptopia Logo"}
                    width={30}
                    height={30}
                    className={"object-center"}
                />
                <p className={"logo_text"}>Promptopia</p>
            </Link>
                {/*Desktop Navigation*/}
                <div className={"sm:flex hidden"}>
                    {isUserLoggedIn ? (
                        <div className={"flex gap-3 md:gap-5"}>
                            <Link href={"/create-prompt"}
                            className={"black_btn"}>
                                Create Post
                            </Link>

                            <button type={"button"}
                             className={"outline_btn"}
                            >
                                Sign Out
                            </button>
                            <Link href={"/profile"}>
                                <Image src={"/assets/images/logo.svg"}
                                width={37}
                                height={37}
                                className={"rounded-full"}
                                alt={"profile"}
                                />
                            </Link>
                        </div>
                    ):(
                        <>

                        </>
                    )}
                </div>

        </nav>
    )
}
export default Nav
