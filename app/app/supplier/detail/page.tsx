export default function SupplierDetails() {
    return (
      <main className="p-10">
  
        <h1 className="text-4xl font-bold mb-6">
          Product Details
        </h1>
  
        <div className="space-y-4">
  
          <input
            className="border p-3 w-full"
            placeholder="Product Description"
          />
  
          <input
            className="border p-3 w-full"
            placeholder="Harvest Date"
          />
  
          <input
            className="border p-3 w-full"
            placeholder="Price Per Ton"
          />
  
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            Submit
          </button>
  
        </div>
  
      </main>
    );
  }