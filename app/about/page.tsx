export default function AboutPage() {
    return (
      <main className="min-h-screen bg-[#f7f5ef] text-[#2f3b1f] px-6 py-16">
    
        <div className="max-w-5xl mx-auto">
  
          <h1 className="text-5xl font-bold mb-8">
            About TerraTrade
          </h1>
  
          <p className="text-xl leading-relaxed mb-8">
            TerraTrade is an agricultural trade platform designed to connect
            suppliers, buyers and logistics providers into one seamless ecosystem.
          </p>
  
          <div className="grid md:grid-cols-3 gap-8 mt-16">
  
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Our Mission
              </h2>
  
              <p className="leading-relaxed text-gray-700">
                To simplify agricultural commerce by creating transparent,
                efficient and scalable digital trade connections.
              </p>
            </div>
  
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Our Vision
              </h2>
  
              <p className="leading-relaxed text-gray-700">
                Building the future infrastructure for global agricultural supply
                chains.
              </p>
            </div>
  
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Our Values
              </h2>
  
              <p className="leading-relaxed text-gray-700">
                Trust, sustainability, transparency and innovation guide every
                decision we make.
              </p>
            </div>
  
          </div>
  
        </div>
  
      </main>
    )
  }