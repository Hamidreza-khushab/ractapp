import { ReactComponent as Facebook } from '../assetes/icons/facebook.svg'
import { ReactComponent as Insta } from '../assetes/icons/insta.svg'
import '../assetes/css/footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          &copy;2023 hamid
        </section>
        <section>
          <NavLink to="https://www.facebook.com/" target="_blank"><Facebook width={20} fill={'blue'} /></NavLink>
          <Insta width={20} fill={'#c10'} />
        </section>
      </footer>
    </>

  )
}

export default Footer