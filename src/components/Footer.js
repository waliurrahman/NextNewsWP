import Link from "next/link"

const Footer = () => {
  return (
    <footer className="container mx-auto text-center p-7 bg-gray-700 text-white">
        &copy; Copyright 2023: <Link className="text-red-200" href="https://tagbracket.com">Tag Bracket</Link>
    </footer>
  )
}

export default Footer