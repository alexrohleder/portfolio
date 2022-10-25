import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon,
  LinkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import useTheme from "../lib/hooks/useTheme";
import profileImg from "../../public/images/profile.jpg";
import { useEffect, useState } from "react";
import BaseLink from "./BaseLink";
import BaseButton from "./BaseButton";

function BaseHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // After mounting we have access to the theme
    setMounted(true);
  }, []);

  return (
    <header className="flex flex-col gap-6 lgp:flex-row">
      <div className="h-36 w-36">
        <Link href="/">
          <Image
            priority
            width={160}
            height={160}
            placeholder="blur"
            className="rounded"
            alt="Alex Rohleder's profile picture"
            src={profileImg}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-6 print:gap-0 lg:gap-4 lgp:flex-1 lgp:h-36 lgp:justify-between">
        <div className="flex flex-col justify-between w-full gap-6 lg:items-center lg:flex-row">
          <div>
            <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
            <h2 className="text-xl">
              Software engineer{" "}
              <span className="block lgp:inline">
                with {new Date().getFullYear() - 2015} years of experience
              </span>
            </h2>
          </div>
          <div className="flex gap-2 print:hidden">
            <BaseButton onClick={() => window.print()}>
              Download Curriculum
            </BaseButton>
            <BaseButton
              variant="primary"
              href="https://calendly.com/alexrohleder/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a meeting
            </BaseButton>
            <BaseButton onClick={toggleTheme} title="Toggle dark mode">
              {mounted &&
                (theme === "dark" ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                ))}
            </BaseButton>
          </div>
        </div>
        <div className="grid gap-2 print:gap-0 print:grid-rows-3 print:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" stroke="currentColor" />
            <BaseLink href="tel:+4741244953">+47 412 44 953</BaseLink>
          </div>
          <div className="flex items-center gap-2">
            <AtSymbolIcon className="w-4 h-4" stroke="currentColor" />
            <BaseLink href="mailto:alexrohleder96@gmail.com">
              alexrohleder96@gmail.com
            </BaseLink>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" stroke="currentColor" />
            Oslo, Norway
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4" stroke="currentColor" />
            <BaseLink
              href="https://linkedin.com/in/alexrohleder"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alexrohleder
            </BaseLink>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4" stroke="currentColor" />
            <BaseLink
              href="https://mentorcruise.com/mentor/alexrohleder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mentorcruise.com/mentor/alexrohleder
            </BaseLink>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4" stroke="currentColor" />
            <BaseLink
              href="https://github.com/alexrohleder"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/alexrohleder
            </BaseLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BaseHeader;
