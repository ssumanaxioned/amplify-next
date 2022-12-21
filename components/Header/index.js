import Link from "next/link";

const Header = ({ data }) => {
  return (
    <div className="w-full bg-blue-600">
      <div className="w-4/5 mx-auto py-5 space-x-5 flex justify-start items-center capitalize">
        <Link href="/">
          <a>
            Home
          </a>
        </Link>
        {
          data.map((item) => (
            <Link key={item.id} href={item.slug}>
              <a>
                {item.slug}
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Header;