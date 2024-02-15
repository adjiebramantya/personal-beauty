import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <Link href="/" className="relative">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="38" height="38" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_3_23" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_3_23"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO2dWahWVRTHf5bXbmBURpNQ2oQNZmYEZnWhaCC6VjTR8NBAJPmipeXNtBENooiCih6C0KSQeqinIEK0ucyyfJCKuEVdGshmcaj7xaJ90fuxtt85h3P23ud86wfr4X5suGvv/95rD2cPYBiGYRiGYRiGkQY9wCXArR3sfGBMbGebzt7AWqCV0VbGdrjpzMohxohNjO10kzmtgCDTYzvddF4wQdLjZOA8xVZYC0mL+02QtDBBaiDIy8CzZoyUwRPAHcCZsQQxw1sGm4ELTRCSqiTDwDJrISRnCyxkkZRtB44J0Yf0AQeaMVIGspR0OfC1UlZPhxDElk50jgL+biurQUrGBMnH80oF3o8SMUHy8bgiyMGUiAmSjw1tYkgIG0uJmCDZOVZpHe9QMiZIdu5WBBmgZEyQ4uGq5VpNqZgg2ThaEUMEKh0TpHi4kt9KxwQpHq6OowJMkITClWCCdGYgVLgSTJDOfKwIMoWKMEE6LygOt4nxCRViguQPV4upEBMkf7g6ngoxQfKFq0+pGBPEzyKlddxDxZggftaHDleCCZJQuBJMEJ27YoQrwQTR+ShGuBJMkGzhaiOBMEGyhaslBMIEyRauTiAQJshoJscMV4IJMpo7Y4YrwQQZzYcxw5Vgguw5XH1GYEyQXSxUWsdSAmOC7OKD2OFKMEH+5wglXH1OBEwQf7i6lwiYIP5wdSIRMEFIJ1yZIP61q/uIRLe3kB7PYc4o4UrodkEWKfl/N6ZD3SzIBcAOJf/XxHSqWwW5Edim5P09YK+YjnWTIOOAfmCNkmexrcC02E7mFWQ2sBp4o2a2wRV4y2P/AleQAHkEOVsZrzfBtgHXkwh5BHkogcJrlWxfhrqYrApBrk2gAFsl2ZA7dNNLYuQRRK4hfwT4MYECbeUw6Tu+Bd531/Vd6iaESdJNo6xaYIIkhglSg20v8myFEQlt5PRULGcMONTNUncXRP6eH3tNp5t5xTNc/M0delyfqK1xV7U2ruLInR1/JDBfaBW0uTSQfs9ydB1sNQ3lDHe3eatmNkCDGeu+mL3kdl78BGxJ1AbdUsg+sQvNMAzDMFLmJPciwE3ARcAE0mEKcBlwM3AxcAgNRWa8NwBfKEPLncCrwNRIvo0BrgY2Kb79A7zuHtFsDONdgWd5xERaTUh6gVUZfJNKM4+GtIzXckzEht0qcaiWsSrnRHEONWdugdnx74Fi93UFfJMloEnU+HnvISVTg+7tPonbT7pw0J7m4QD+bVb+75A7QnAV8KhnDe4ZaspZnr1K+yuLj+2b5KTzr5Kpim/fKQ+o9LmOffd0P9R1Wf42JdOyEVljrdKX9Ab+mjnfk1YbkBxGQy6Zly2jGs8paQ8PXFlme9I+lsKR5jK4RcnI7Z7RzkblU2+VG86uVHyTXTIa65S0B1FDpikZ+UWpXdpJI7nGqEqOVPqtv4AZbenmePrB2rLJs/1yJbAceMszvJRRWNW87Zmcvujeo33T49uD1Jj+AmP9b4B9A/jWV+AIhHxUO4Cao3WKPpPWc3pA35bm8E3ODJ5DA5BO+wFlj1a7fQ/MjHT1xc4Ovv0MnEvDOMV9T/+zLbNfucP0pT4zmhO5pnUF8KuyqrDcPSTcWMa5p36mJzjB6nGXjZ3qXnJOlv8AZb+NrmmISGwAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <div className="bg-primary rounded-full absolute px-2 text-white top-[-10px] right-[-10px]">
        2
      </div>
    </Link>
  );
}
