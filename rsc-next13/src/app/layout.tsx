import "./globals.scss";
import Script from "next/script";

export const metadata = {
  title: "RSC Next13",
  description: "NHSUK app built with react server components",
};

// Some weird caching of route.ts files, disable for now
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <Script src='/nhsuk-7.0.0.min.js' defer />

        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content='' />

        <link
          rel='preload'
          as='font'
          href='https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff2'
          type='font/woff2'
          crossOrigin=''
        />
        <link
          rel='preload'
          as='font'
          href='https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff2'
          type='font/woff2'
          crossOrigin=''
        />
        <link rel='preconnect  dns-prefetch' href='https://www.nhs.uk/' />
        <link
          rel='preconnect  dns-prefetch'
          href='https://assets.nhs.uk/'
          crossOrigin=''
        />

        <link
          rel='shortcut icon'
          href='/nhsuk-frontend/assets/favicons/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='apple-touch-icon'
          href='/nhsuk-frontend/assets/favicons/apple-touch-icon-180x180.png'
        />
        <link
          rel='mask-icon'
          href='/nhsuk-frontend/assets/favicons/favicon.svg'
          color='#005eb8'
        />
        <link
          rel='icon'
          sizes='192x192'
          href='/nhsuk-frontend/assets/favicons/favicon-192x192.png'
        />
        <meta
          name='msapplication-TileImage'
          content='/nhsuk-frontend/assets/favicons/mediumtile-144x144.png'
        />
        <meta name='msapplication-TileColor' content='#005eb8' />
        <meta
          name='msapplication-square70x70logo'
          content='/nhsuk-frontend/assets/favicons/smalltile-70x70.png'
        />
        <meta
          name='msapplication-square150x150logo'
          content='/nhsuk-frontend/assets/favicons/mediumtile-150x150.png'
        />
        <meta
          name='msapplication-wide310x150logo'
          content='/nhsuk-frontend/assets/favicons/widetile-310x150.png'
        />
        <meta
          name='msapplication-square310x310logo'
          content='/nhsuk-frontend/assets/favicons/largetile-310x310.png'
        />
      </head>

      <body>
        <header
          className='nhsuk-header nhsuk-header--transactional'
          role='banner'
        >
          <div className='nhsuk-width-container nhsuk-header__container'>
            <div className='nhsuk-header__logo nhsuk-header__logo--only'>
              <a
                className='nhsuk-header__link'
                href='/'
                aria-label='NHS homepage'
              >
                <svg
                  className='nhsuk-logo'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 40 16'
                  height='40'
                  width='100'
                >
                  <path
                    className='nhsuk-logo__background'
                    fill='#005eb8'
                    d='M0 0h40v16H0z'
                  ></path>
                  <path
                    className='nhsuk-logo__text'
                    fill='#fff'
                    d='M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6'
                  ></path>
                </svg>
              </a>
            </div>
            <div className='nhsuk-header__transactional-service-name'>
              <a
                className='nhsuk-header__transactional-service-name--link'
                href='/'
              >
                React Server Components
              </a>
            </div>
          </div>
        </header>
        <div className='nhsuk-width-container '>
          <main className='nhsuk-main-wrapper ' id='maincontent' role='main'>
            {children}
          </main>
        </div>

        <footer role='contentinfo'>
          <div className='nhsuk-footer' id='nhsuk-footer'>
            <div className='nhsuk-width-container'>
              <p className='nhsuk-footer__copyright'>&copy; Crown copyright</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
