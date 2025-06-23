
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

try {
  const publicKey = new PublicKey("G62PeLS8b8pUnxxvNyZkSHKWxt6Vs4dHAQgrcTjP1E6K");
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
  console.log(`Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`);
} catch (err) {
  console.log("Invalid wallet address. Please check it.");
}

