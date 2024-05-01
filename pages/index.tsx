/** @jsx h */
import { h } from "htm";

// deno-lint-ignore no-explicit-any
export const indexHead: Record<string, any> = {
  lang: "en",
  title: "It's Parkin'",
  meta: {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    description: "This website is UNDER DEVELOPMENT.",
  },
  links: [
    { rel: "preconnect", href: "https://unpkg.com", crossorigin: "" },
    { rel: "dns-prefetch", href: "https://unpkg.com" },
    {
      rel: "shortcut icon",
      href: "data:image/svg+xml,%3Csvg width='113.379' height='72.071' viewBox='0 0 113.379 72.071' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle type='text/css'%3E path %7B fill: %23273240; %7D @media (prefers-color-scheme: dark) %7B path %7B fill: %23dbe1fe; %7D %7D %3C/style%3E%3Cpath fill-rule='evenodd' stroke-linecap='round' vector-effect='non-scaling-stroke' d='M 16.602 18.262 L 4.981 18.262 A 50.377 50.377 0 0 0 3.695 21.495 A 61.569 61.569 0 0 0 2.979 23.608 A 55.734 55.734 0 0 0 1.914 27.421 A 66.701 66.701 0 0 0 1.367 29.883 A 61.8 61.8 0 0 0 0.621 34.242 A 73.159 73.159 0 0 0 0.366 36.353 Q 0 39.795 0 43.604 A 75.376 75.376 0 0 0 0.44 51.871 A 66.24 66.24 0 0 0 0.781 54.492 A 39.038 39.038 0 0 0 1.799 59.28 A 29.009 29.009 0 0 0 3.369 63.574 Q 5.176 67.48 8.154 69.775 A 10.932 10.932 0 0 0 13.266 71.908 A 14.612 14.612 0 0 0 15.479 72.07 A 11.819 11.819 0 0 0 18.632 71.66 A 10.516 10.516 0 0 0 20.142 71.118 A 10.992 10.992 0 0 0 23.877 68.359 A 13.364 13.364 0 0 0 25.45 66.352 A 15.38 15.38 0 0 0 25.806 65.771 A 20.248 20.248 0 0 0 26.807 63.807 A 24.65 24.65 0 0 0 27.344 62.5 Q 28.027 64.307 28.906 65.771 A 19.824 19.824 0 0 0 29.985 67.39 A 16.119 16.119 0 0 0 30.762 68.359 A 11.531 11.531 0 0 0 34.348 71.027 A 11.154 11.154 0 0 0 34.546 71.118 Q 36.67 72.07 39.258 72.07 A 13.506 13.506 0 0 0 42.557 71.684 A 10.672 10.672 0 0 0 45.752 70.312 A 13.174 13.174 0 0 0 49.551 66.553 A 16.017 16.017 0 0 0 50.244 65.43 A 18.238 18.238 0 0 0 51.861 62.398 A 22.286 22.286 0 0 0 52.49 60.718 A 35.584 35.584 0 0 0 53.589 56.52 A 40.852 40.852 0 0 0 53.858 55.029 A 64.788 64.788 0 0 0 54.488 49.822 A 70.947 70.947 0 0 0 54.517 49.463 Q 54.736 46.582 54.736 43.604 A 72.011 72.011 0 0 0 54.535 38.12 A 62.174 62.174 0 0 0 54.346 36.084 A 76.965 76.965 0 0 0 53.762 31.819 A 63.05 63.05 0 0 0 53.32 29.443 A 59.749 59.749 0 0 0 52.265 25.208 A 50.801 50.801 0 0 0 51.709 23.413 A 54.226 54.226 0 0 0 50.508 20.124 A 44.12 44.12 0 0 0 49.707 18.262 L 38.135 18.262 A 99.865 99.865 0 0 1 41.626 30.688 A 66.788 66.788 0 0 1 43.067 43.604 A 196.727 196.727 0 0 1 43.018 48.022 A 55.993 55.993 0 0 1 42.872 51.032 A 48.026 48.026 0 0 1 42.774 52.148 Q 42.627 53.955 42.334 55.566 A 22.626 22.626 0 0 1 42.005 57.092 A 16.802 16.802 0 0 1 41.602 58.447 A 16.388 16.388 0 0 1 41.24 59.695 Q 40.87 60.795 40.405 61.548 A 3.4 3.4 0 0 1 39.998 62.09 Q 39.43 62.695 38.721 62.695 A 3.132 3.132 0 0 1 37.183 62.305 Q 36.475 61.914 35.889 61.084 Q 35.345 60.307 34.909 59.143 A 14.398 14.398 0 0 1 34.693 58.521 A 19.925 19.925 0 0 1 34.325 57.224 Q 34.144 56.498 33.981 55.657 A 41.287 41.287 0 0 1 33.789 54.59 A 38.042 38.042 0 0 1 33.6 52.857 A 48.399 48.399 0 0 1 33.496 51.392 A 59.608 59.608 0 0 1 33.423 49.579 A 76.507 76.507 0 0 1 33.399 47.607 L 33.399 31.689 L 21.338 31.689 L 21.338 47.607 A 61.558 61.558 0 0 1 21.291 50.073 Q 21.246 51.195 21.158 52.186 A 33.845 33.845 0 0 1 21.094 52.832 Q 20.85 55.078 20.459 56.641 A 18.689 18.689 0 0 1 20.175 57.89 Q 20.012 58.504 19.818 59.036 A 10.867 10.867 0 0 1 19.727 59.277 A 10.537 10.537 0 0 1 19.354 60.125 Q 19.145 60.546 18.917 60.892 A 5.698 5.698 0 0 1 18.75 61.133 A 4.869 4.869 0 0 1 18.174 61.779 A 3.631 3.631 0 0 1 17.456 62.305 Q 16.748 62.695 15.967 62.695 A 1.814 1.814 0 0 1 14.733 62.2 Q 14.286 61.802 13.916 61.084 A 10.73 10.73 0 0 1 13.342 59.731 Q 13.095 59.03 12.89 58.201 A 23.735 23.735 0 0 1 12.598 56.836 A 44.432 44.432 0 0 1 12.199 54.152 Q 12.031 52.739 11.92 51.162 A 73.654 73.654 0 0 1 11.89 50.708 A 110.949 110.949 0 0 1 11.671 44.06 A 121.373 121.373 0 0 1 11.67 43.604 Q 11.768 37.012 13.086 30.688 Q 14.404 24.365 16.602 18.262 Z M 64.746 22.461 L 83.545 27.148 L 70.313 43.115 L 78.418 48.73 L 88.721 31.25 L 99.072 49.268 L 107.129 43.359 L 94.287 27.539 L 113.379 23.047 L 110.401 13.477 L 92.432 21.143 L 94.141 0 L 84.277 0 L 85.791 20.85 L 67.676 13.037 L 64.746 22.461 Z' /%3E%3C/svg%3E%0A",
      type: "image/svg+xml",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/simpledotcss@2.3.0/simple.min.css",
    },
  ],
};

export const indexBody = (req: Request) => (
  <div>
    <h1>Hello World!</h1>
    <p>
      You're visiting <code>{new URL(req.url).hostname}</code> and the domain is
      owned by <a href="https://nekohuan.cyou">@rnmeow</a>.
      <br />
      It is currently under development. Feel free to check for updates anytime!
    </p>
    <p>
      The source of this page is available{" "}
      <a href="https://github.com/rnmeow/parkin" title="GitHub repo">
        here
      </a>
      .
    </p>
    <footer>&copy; {new Date().getFullYear()}, Connor Kuo.</footer>
  </div>
);
