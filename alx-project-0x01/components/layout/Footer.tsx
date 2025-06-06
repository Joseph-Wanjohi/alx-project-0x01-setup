import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 shadow-inner">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-xl">
          <Link href="/">Daily Contents</Link>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;