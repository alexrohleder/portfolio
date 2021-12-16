import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  AtSymbolIcon,
  LocationMarkerIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

function BaseHeader() {
  return (
    <header className="flex flex-col gap-8 lgp:flex-row">
      <div className="h-40 w-40 lg:h-36 lg:w-36">
        <Link href="/">
          <a>
            <Image
              priority
              width={160}
              height={160}
              className="rounded"
              alt="Alex Rohleder's profile picture"
              src="/images/profile.jpg"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-8 print:gap-0 lg:gap-4 lgp:flex-1 print:h-40 lg:h-36 lgp:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
          <h2 className="text-xl">
            Software engineer{" "}
            <span className="hidden lgp:inline">
              with 6 years of experience
            </span>
          </h2>
        </div>
        <div className="grid gap-2 print:gap-1 print:grid-rows-3 print:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3">
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
            Trondheim, Norway
          </div>
          <div className="flex gap-2 items-center">
            <ExternalLinkIcon className="h-4 w-4" stroke="currentColor" />
            <a
              href="https://linkedin.com/in/alexrohleder"
              target="_blank"
              rel="noopener"
            >
              linkedin.com/in/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <ExternalLinkIcon className="h-4 w-4" stroke="currentColor" />
            <a
              href="https://twitter.com/alexrohleder"
              target="_blank"
              rel="noopener"
            >
              twitter.com/alexrohleder
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <ExternalLinkIcon className="h-4 w-4" stroke="currentColor" />
            <a
              href="https://github.com/alexrohleder"
              target="_blank"
              rel="noopener"
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
