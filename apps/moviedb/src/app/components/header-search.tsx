import '../styles/support.scss'
import '../styles/header-search.scss'
import {useRef} from "react";

export function HeaderSearch() {
  const searchbar = useRef<HTMLInputElement>(null)


  function handleSearch(): void {
    const ref: HTMLInputElement | null = searchbar.current

    if (ref == null) {
      throw Error('expects reference to be set')
    }

    const val = ref.value.toLowerCase()

    if (val.length < 3) {
      return;
    }

    console.log('"', val, '"')
  }

  return <section className="navigation__searchbar">
    <form onSubmit={(event) => {
      handleSearch()
      event.preventDefault()
    }}>
      <div className="searchbar__component">
        <input type="text"
               className="searchbar__field"
               name="search"
               placeholder="Search for title"
               ref={searchbar}
        ></input>
      </div>
    </form>
  </section>
}
