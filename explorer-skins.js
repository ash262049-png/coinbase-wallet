// Which block explorer each chain's transactions belong to.
// desktop.html uses this to build the link; explorer.html uses it to skin the page.
const EXPLORER_SKINS = {
  sol:  { name:'Solscan',      kind:'sol',     accent:'#009978', accent2:'#c74ae3', net:'Solana' },
  eth:  { name:'Etherscan',    kind:'evm',     accent:'#21325b', accent2:'#3498db', net:'Ethereum' },
  bnb:  { name:'BscScan',      kind:'evm',     accent:'#f0b90b', accent2:'#e0a800', net:'BNB Chain' },
  arb:  { name:'Arbiscan',     kind:'evm',     accent:'#12aaff', accent2:'#2d374b', net:'Arbitrum One' },
  pol:  { name:'PolygonScan',  kind:'evm',     accent:'#8247e5', accent2:'#8247e5', net:'Polygon' },
  avax: { name:'SnowTrace',    kind:'evm',     accent:'#e84142', accent2:'#e84142', net:'Avalanche C-Chain' },
  btc:  { name:'mempool',      kind:'utxo',    accent:'#f7931a', accent2:'#1bd8f6', net:'Bitcoin' },
  ltc:  { name:'Blockchair',   kind:'utxo',    accent:'#3f8ef7', accent2:'#3f8ef7', net:'Litecoin' },
  bch:  { name:'Blockchair',   kind:'utxo',    accent:'#8dc351', accent2:'#8dc351', net:'Bitcoin Cash' },
  doge: { name:'Dogechain',    kind:'utxo',    accent:'#c2a633', accent2:'#c2a633', net:'Dogecoin' },
  zec:  { name:'Blockchair',   kind:'utxo',    accent:'#f4b728', accent2:'#f4b728', net:'Zcash' },
  xrp:  { name:'XRPScan',      kind:'account', accent:'#25a768', accent2:'#25a768', net:'XRP Ledger' },
  trx:  { name:'Tronscan',     kind:'account', accent:'#eb0029', accent2:'#eb0029', net:'Tron' },
  ada:  { name:'Cardanoscan',  kind:'account', accent:'#0f4bd2', accent2:'#0f4bd2', net:'Cardano' },
  xlm:  { name:'StellarChain', kind:'account', accent:'#3e5fa8', accent2:'#3e5fa8', net:'Stellar' },
  dot:  { name:'Subscan',      kind:'account', accent:'#e6007a', accent2:'#e6007a', net:'Polkadot' },
  near: { name:'NearBlocks',   kind:'account', accent:'#00c1de', accent2:'#00c1de', net:'NEAR' },
  sui:  { name:'SuiVision',    kind:'account', accent:'#4ca3ff', accent2:'#4ca3ff', net:'Sui' },
  atom: { name:'Mintscan',     kind:'account', accent:'#6f7bf7', accent2:'#6f7bf7', net:'Cosmos' },
  alt:  { name:'Explorer',     kind:'account', accent:'#5b616e', accent2:'#8a919e', net:'Network' },
};

// Chains that are not Ethereum but still run the EVM, so they get an Etherscan-shaped page.
const SKIN_BY_SYM = {
  BTC:'btc', LTC:'ltc', BCH:'bch', DOGE:'doge', ZEC:'zec', SOL:'sol',
  XRP:'xrp', TRX:'trx', ADA:'ada', XLM:'xlm', DOT:'dot', NEAR:'near', SUI:'sui',
  ATOM:'atom', TIA:'atom', INJ:'atom',
  BNB:'bnb', ARB:'arb', POL:'pol', AVAX:'avax',
};
function skinKeyFor(sym, isEvm){ return SKIN_BY_SYM[sym] || (isEvm ? 'eth' : 'alt'); }
