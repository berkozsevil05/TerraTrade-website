export default function LogisticsPage() {
    return (
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Logistics Dashboard
        </h1>
  
        <div className="space-y-4">
  
          <input
            className="border p-3 w-full"
            placeholder="Company Name"
          />
  
          <input
            className="border p-3 w-full"
            placeholder="Regions You Serve"
          />
  
          <input
            className="border p-3 w-full"
            placeholder="Transport Type"
          />
  
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
            Create Logistics Profile
          </button>
  
        </div>
      </main>
    );
  }