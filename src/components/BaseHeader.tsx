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
      <div className="h-36 w-36">
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
      <div className="flex flex-col gap-8 print:gap-0 lg:gap-4 lgp:flex-1 lgp:h-36 lgp:justify-between">
        <div className="w-full flex flex-col gap-8 justify-between lg:items-center lg:flex-row">
          <div>
            <h1 className="text-4xl font-semibold">Alex Rohleder</h1>
            <h2 className="text-xl">
              Software engineer{" "}
              <span className="hidden lgp:inline">
                with 6 years of experience
              </span>
            </h2>
          </div>
          <div className="flex gap-2 print:hidden">
            <button
              className="px-4 py-2 text-sm font-medium text-black bg-gray-300 rounded hover:bg-gray-400 transition-colors"
              onClick={() => window.print()}
            >
              Download Curriculum
            </button>
            <a
              className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition-colors"
              href="https://calendly.com/alexrohleder/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a meeting
            </a>
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
            Trondheim, Norway
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
