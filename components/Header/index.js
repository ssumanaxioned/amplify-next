import Link from "next/link";

const Header =({ data })=> {
  return (
    <div className="w-full px-5 py-5 space-x-5 flex justify-start items-center capitalize bg-blue-600">
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
  ) 
}

export default Header;