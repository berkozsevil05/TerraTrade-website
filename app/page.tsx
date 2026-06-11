import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f5ef] text-[#2f3b1f]">

        <section className="flex flex-col items-center text-center py-20 px-6">

          <img
            src="/logo.png"
            alt="TerraTrade Logo"
            className="w-[300px] mb-6"
          />

          <h1 className="text-5xl font-bold mb-4">
            Connecting Soil to Market
          </h1>

          <p className="text-lg max-w-3xl mb-10">
            TerraTrade connects suppliers, buyers and logistics providers
            into one intelligent agricultural trade ecosystem.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">

            <a
              href="/supplier"
              className="bg-[#556b2f] hover:bg-[#445622] text-white px-8 py-4 rounded-xl"
            >
              I'm a Supplier
            </a>

            <a
              href="/buyer"
              className="bg-[#2f3b1f] hover:bg-black text-white px-8 py-4 rounded-xl"
            >
              I'm a Buyer
            </a>

            <a
              href="/logistics"
              className="bg-[#c27c3d] hover:bg-[#a5662f] text-white px-8 py-4 rounded-xl"
            >
              Logistics Provider
            </a>

          </div>
        </section>

        <section className="max-w-5xl mx-auto py-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-[#556b2f]">
                0+
              </h2>
              <p>Suppliers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#556b2f]">
                0+
              </h2>
              <p>Buyers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#556b2f]">
                0+
              </h2>
              <p>Logistics Partners</p>
            </div>

          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 px-10 py-20">

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Suppliers
            </h2>

            <p>
              Farmers and manufacturers can showcase products,
              connect with buyers and request logistics support.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Buyers
            </h2>

            <p>
              Retailers can discover verified suppliers,
              compare pricing and optimize procurement.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Logistics
            </h2>

            <p>
              Logistics providers can connect directly
              with suppliers and buyers across the supply chain.
            </p>
          </div>

        </section>

        <Footer />

      </main>
    </>
  );
}