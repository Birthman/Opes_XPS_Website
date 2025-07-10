
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <nav className="w-full max-w-5xl flex justify-between items-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold">Opes (XPS)</h1>
        <a
          href="https://suiscan.xyz/mainnet/coin/0x6e49957e2832df47daa0363bd5001a3584e859b138d5c8a3aec24f2006b58469::xps::XPS/txs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          View on SuiScan <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Opes (XPS)</h2>
        <p className="max-w-xl text-lg md:text-xl mb-6">
          Opes (XPS) is a community-focused token on the Sui blockchain with a total supply of 1 billion tokens, aiming to empower decentralized growth and transparent transactions.
        </p>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md">
          <p className="text-lg md:text-xl font-semibold mb-2">Total Supply:</p>
          <p className="text-2xl md:text-3xl font-bold">1,000,000,000 XPS</p>
          <a
            href="https://suiscan.xyz/mainnet/coin/0x6e49957e2832df47daa0363bd5001a3584e859b138d5c8a3aec24f2006b58469::xps::XPS/txs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            Track Transactions
          </a>
        </div>
      </motion.div>
    </main>
  );
}
