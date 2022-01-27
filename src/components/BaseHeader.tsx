import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  AtSymbolIcon,
  LocationMarkerIcon,
  ExternalLinkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import useTheme from "../lib/hooks/useTheme";
import profileImg from "../../public/images/profile.jpg";
import { useEffect, useState } from "react";

function BaseHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // After mounting we have access to the theme
    setMounted(true);
  }, []);

  return (
    <header className="flex flex-col gap-8 lgp:flex-row">
      <div className="h-36 w-36">
        <Link href="/">
          <a>
            <Image
              priority
              width={160}
              height={160}
              placeholder="blur"
              className="rounded"
              alt="Alex Rohleder's profile picture"
              src={profileImg}
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-8 print:gap-0 lg:gap-4 lgp:flex-1 lgp:h-36 lgp:justify-between">
        <div className="w-full flex flex-col gap-8 justify-between lg:items-center lg:flex-row">
          <div>
            <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
            <h2 className="text-xl">
              Software engineer{" "}
              <span className="block lgp:inline">
                with 6 years of experience
              </span>
            </h2>
          </div>
          <div className="flex gap-2 print:hidden">
            <button
              className="hidden lg:block text-center px-4 py-2 text-sm font-medium text-black rounded hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
              onClick={() => window.print()}
            >
              Download Curriculum
            </button>
            <a
              className="text-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors"
              href="https://calendly.com/alexrohleder/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a meeting
            </a>
            <button
              className="hidden lg:block px-2 py-1 text-black rounded bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
              onClick={toggleTheme}
              title="Toggle dark mode"
            >
              {mounted &&
                (theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                ))}
            </button>
          </div>
        </div>
        <div className="grid gap-2 print:gap-0 print:grid-rows-3 print:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3">
          <div className="flex gap-2 items-center">
            <PhoneIcon className="h-4 w-4" stroke="currentColor" />
            <a href="tel:+4741244953">+47 412 44 953</a>
          </div>
          <div className="flex gap-2 items-center">
            <AtSymbolIcon className="h-4 w-4" stroke="currentColor" />
            <a href="mailto:alexrohleder96@gmail.com">
              alexrohleder96@gmail.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <LocationMarkerIcon className="h-4 w-4" stroke="currentColor" />
            Oslo, Norway
          </div>
          <div className="flex gap-2 items-center">
            <ExternalLinkIcon className="h-4 w-4" stroke="currentColor" />
            <a
              href="https://linkedin.com/in/alexrohleder"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <ExternalLinkIcon className="h-4 w-4" stroke="currentColor" />
            <a
              href="https://twitter.com/alexrohleder"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter.com/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <ExternalLinkIcon className="h-4 w-4" stroke="currentColor" />
            <a
              href="https://github.com/alexrohleder"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/alexrohleder
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BaseHeader;
