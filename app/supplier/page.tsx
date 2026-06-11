export default function SupplierPage() {
    return (
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Supplier Dashboard
        </h1>
  
        <div className="space-y-4">
  
          <input
            className="border p-3 w-full"
            placeholder="Farm Name"
          />
  
          <input
            className="border p-3 w-full"
            placeholder="Product Type"
          />
  
          <input
            className="border p-3 w-full"
            placeholder="Quantity"
          />
  
  <a
  href="/supplier/details"
  className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block"
>
  Continue
</a>
  
        </div>
      </main>
    );
  }