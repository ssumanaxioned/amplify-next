import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Studios from "../../assets/sstk-studios-logo_secondary-white.png";

const Navbar = ({ data }) => {
  const { locale, asPath } = useRouter();
  return (
    <div className="w-full bg-blue-600">
      <div className="w-4/5 mx-auto py-5 space-x-5 flex justify-between items-center capitalize">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <a>
              <Image
                width={300}
                height={45}
                src={Studios}
                alt="Studios"
              />
            </a>
          </Link>
          {
            data.links.map((link) => (
              link.url && link.url !== '' ?
                <a key={link.url} href={link.url}>
                  {link[locale]}
                </a> :
                <Link key={link.slug} href={link.slug}>
                  <a>
                    {link[locale]}
                  </a>
                </Link>
            ))
          }
        </div>
        <div className="space-x-5">
          {
            data.locale.map((item) => (
              <Link key={item.title} href={asPath} locale={item.locale}>
                <a>
                  {item.title}
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;