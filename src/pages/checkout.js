import { useRouter } from 'next/router';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckOutProduct from '../components/CheckOutProduct';
import Currency from 'react-currency-formatter';

function Checkout() {
  const router = useRouter();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Checkout Page</title>
      </Head>

      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left Basket Items */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 text-center">
              {items.length === 0 ? 'Your Basket Empty!' : 'Shopping Basket!'}
            </h1>

            {items.map((item, i) => (
              <CheckOutProduct key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Right Subtotal*/}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{' '}
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>

              <button className="button mt-2">Proceed to checkout</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
