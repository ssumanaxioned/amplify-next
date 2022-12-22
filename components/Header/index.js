import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ data }) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="w-full bg-blue-600">
      <div className="w-4/5 mx-auto py-5  flex justify-between items-center capitalize">
        <div className="flex justify-start items-center space-x-5">
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
          {
            data.map((item) => (
              <Link key={item.id} href={`/${item.slug}`}>
                <a>
                  {item.slug}
                </a>
              </Link>
            ))
          }
        </div>
        <div className="space-x-5">
          {
            locales.map((locale, index) => (
              <Link href={asPath} key={`${locale}${index}`} locale={locale} >
                <a>
                  {locale}
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header;