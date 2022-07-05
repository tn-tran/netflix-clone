function Header() {
  return (
    <header>
      <div className="flex item-center space-x-2 md:-x-10">
      <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div></div>
    </header>
  )
}

export default Header