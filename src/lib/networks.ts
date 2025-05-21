import {
  mainnet, sepolia, goerli, holesky,
  polygon, polygonMumbai,
  arbitrum, arbitrumSepolia,
  base, baseSepolia,
  scroll, scrollSepolia,
  optimism, optimismSepolia,
  avalanche, avalancheFuji,
  bsc, bscTestnet,
  fantom, fantomTestnet,
  gnosis, gnosisChiado,
  solana, solanaDevnet,
  type AppKitNetwork
} from '@reown/appkit/networks'

// Export networks array with proper typing
export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  mainnet,
  // EVM Mainnets
  polygon, arbitrum, base, scroll, optimism, avalanche, bsc, fantom, gnosis,
  // EVM Testnets
  sepolia, goerli, holesky, polygonMumbai, arbitrumSepolia, baseSepolia, scrollSepolia, optimismSepolia, avalancheFuji, bscTestnet, fantomTestnet, gnosisChiado,
  // Solana
  solana, solanaDevnet
] 