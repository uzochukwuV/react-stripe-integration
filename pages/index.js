import Head from 'next/head';
import styles from '../styles/Home.module.css';
import getStripe from '../lib/getStripe';

export default function Home() {

    async function HandleCheckOut(){
        const stripe = await getStripe();
        const {error} = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
              quantity: 1,
            }
          ],
          mode: "payment",
          successUrl: "http://localhost:3000/success",
          cancelUrl: "http://localhost:3000/cancel",
          customerEmail: "vic.ezealor@gmail.com"
        });
        console.warn(error);
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Strip checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={HandleCheckOut}>Checkout</button>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button {
          height: 40px;
          width: 150px;
          background-color: black;
          color: white;
          font-size: 18px;
          border-radius: 5px;
          outline: 0;
          border: 0;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
