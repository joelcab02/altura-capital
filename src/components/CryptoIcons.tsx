import React from 'react';
export const CryptoIcons = () => {
  const cryptoIcons = [{
    name: 'Avalanche',
    url: 'https://cryptologos.cc/logos/avalanche-avax-logo.png'
  }, {
    name: 'Bitcoin',
    url: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  }, {
    name: 'Chainlink',
    url: 'https://cryptologos.cc/logos/chainlink-link-logo.png'
  }, {
    name: 'Cardano',
    url: 'https://cryptologos.cc/logos/cardano-ada-logo.png'
  }, {
    name: 'Polygon',
    url: 'https://cryptologos.cc/logos/polygon-matic-logo.png'
  }, {
    name: 'Chainlink',
    url: 'https://cryptologos.cc/logos/chainlink-link-logo.png'
  }, {
    name: 'Dogecoin',
    url: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png'
  }, {
    name: 'Ethereum',
    url: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  }];
  return <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {cryptoIcons.map((icon, index) => <div key={index} className="w-12 h-12">
              <img src={icon.url} alt={`${icon.name} logo`} className="w-full h-full object-contain" />
            </div>)}
        </div>
      </div>
    </div>;
};