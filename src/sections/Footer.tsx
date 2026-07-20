import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  )
}
