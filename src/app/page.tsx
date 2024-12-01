import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Coins, Heart, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <main className="container mx-auto px-4 py-8">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="flex justify-between items-center mb-12">
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="StarkDate Logo" width={40} height={40} />
        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">StarkDate</span>
      </div>
      <Button className="bg-white text-purple-600 hover:bg-pink-100 hover:text-purple-700 transition-all duration-300 transform hover:scale-105">
        Go to App
      </Button>
    </header>
  )
}

function Hero() {
  return (
    <section className="text-center mb-20">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Where Sparks Ignite Securely</h1>
      <p className="text-xl mb-12 max-w-2xl mx-auto">Experience the thrill of connection with unparalleled privacy and security. StarkDate brings you closer to your perfect match.</p>
      <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
        <Image
          src="/placeholder.svg"
          alt="StarkDate App"
          width={300}
          height={600}
          className="relative rounded-3xl shadow-2xl mx-auto"
        />
        <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-3 shadow-lg animate-bounce">
          <Heart className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "Privacy First", description: "Your data is protected with state-of-the-art encryption and blockchain technology." },
    { icon: <Users className="w-8 h-8" />, title: "Smart Matchmaking", description: "Our AI-powered algorithm finds your perfect match based on compatibility and preferences." },
    { icon: <Coins className="w-8 h-8" />, title: "Tokenized Interactions", description: "Enjoy fair and transparent dating with our unique token system." },
  ]

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">Why Choose StarkDate?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md border-pink-500 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
              <p className="text-center text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { number: "1", title: "Go to App", description: "Open StarkDate and start your journey." },
    { number: "2", title: "Create Your Profile", description: "Showcase your unique personality and preferences." },
    { number: "3", title: "Discover Matches", description: "Browse through potential partners tailored to you." },
    { number: "4", title: "Start Chatting", description: "Engage in encrypted conversations with your matches." },
  ]

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">How It Works</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-pink-100">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="text-center text-sm py-8">
      <div className="mb-6">
        <a href="#" className="mx-3 hover:text-pink-300 transition-colors duration-300">Terms of Service</a>
        <a href="#" className="mx-3 hover:text-pink-300 transition-colors duration-300">Privacy Policy</a>
      </div>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="text-white hover:text-pink-300 transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-pink-300 transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-pink-300 transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.193 3.193 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <p className="text-pink-200">StarkDate is intended for users aged 18 and over. Please date responsibly.</p>
    </footer>
  )
}

