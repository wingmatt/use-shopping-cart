import { NextPage, GetStaticProps } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'
import formatStripeData from '../utils/get-stripe-price'

const IndexPage: NextPage = (props) => {
  return (
    <Layout title="use-shopping-cart | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products priceData={props.priceData} />
        </Cart>
      </div>
    </Layout>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const priceData = await formatStripeData()

  return {
    props: {
      priceData
    },
    revalidate: 10
  }
}
