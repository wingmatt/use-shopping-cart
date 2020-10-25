import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <a href="/api/login">Login</a>
      <a href="/api/logout">Logout</a>
      <ul className="card-list">
        <li>
          <Link href="/donate-with-checkout">
            <a className="card checkout-style-background">
              <h2 className="bottom">Donate with Checkout</h2>
              <img src="/checkout-one-time-payments.svg" alt="Donate with Checkout" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/donate-with-elements">
            <a className="card elements-style-background">
              <h2 className="bottom">Donate with Elements</h2>
              <img src="/elements-card-payment.svg" alt="Donate with Elements"/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/use-shopping-cart">
            <a className="card cart-style-background">
              <h2 className="bottom">Use Shopping Cart</h2>
              <img src="/use-shopping-cart.png" alt="Use Shopping Cart"/>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
