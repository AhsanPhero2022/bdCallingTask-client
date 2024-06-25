const Navbar = () => {
  const navitem = (
    <>
      <li>Buy</li>
      <li>Sell</li>
      <li>Services</li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitem}
            </ul>
          </div>
          <div>
            <ul className="menu menu-horizontal hidden px-1 lg:flex gap-6">
              {navitem}
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <img
            className="w-8"
            src="https://s3-alpha-sig.figma.com/img/7d02/0dd0/e8cbbb0006f4af5b4764c7061ba11f37?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4tjSEfN0nJ1YlqoQnpyFgbAN4ZDzPfXU9w8qtsO7HptITlAFVXWG7kXDR6IgksnbOjiGxG2hIFlOcjkCKQrnKR15AsPcsxCqda~mwiCFP~tkjZLY8CxXX5XeZl6mpchC5XHjb5Cj2695t7f0pN9KTpsxEerye1msAoapy1n8eEUGjhojkU8bzcfJ~9dUObkcadD-moaaCAZ3MPr8L3BaVxze-sF2ERxtGKzPi1aZ82FYP~YY1ngjRCPGivCMlI6jeKvMEBA0XpBLbx2aBruo4KOGFrfiKQMDzMHcoyS2dbNUkEJxqonUyF8EPs~VftDcbBjXiAb72R4haNUzbeerA__"
            alt="logo"
          />
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
