import{r as l,W as g,C as h,R as b,a as C}from"./vendor.1dd7c98b.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function m(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=m(e);fetch(e.href,a)}};H();const k="hh-sol-artifact-1",x="BluntPortal",A="contracts/BluntPortal.sol",B=[{inputs:[],stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"}],name:"NewHit",type:"event"},{inputs:[],name:"getAllHits",outputs:[{components:[{internalType:"address",name:"smoker",type:"address"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"}],internalType:"struct BluntPortal.Hit[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalHits",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastHit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_message",type:"string"}],name:"smokeTheBlunt",outputs:[],stateMutability:"nonpayable",type:"function"}],M="0x60806040526200004f6040518060400160405280601381526020017f736d656c6c73206c696b6520776565642e2e2e000000000000000000000000008152506200007760201b620006471760201c565b606444426200005f9190620001c4565b6200006b919062000261565b60018190555062000308565b62000117816040516024016200008e919062000184565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200011a60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200015082620001a8565b6200015c8185620001b3565b93506200016e8185602086016200022b565b6200017981620002f7565b840191505092915050565b60006020820190508181036000830152620001a0818462000143565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620001d18262000221565b9150620001de8362000221565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000216576200021562000299565b5b828201905092915050565b6000819050919050565b60005b838110156200024b5780820151818401526020810190506200022e565b838111156200025b576000848401525b50505050565b60006200026e8262000221565b91506200027b8362000221565b9250826200028e576200028d620002c8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b6110ff80620003186000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80636df4b40c146100515780636ede39391461006f578063c4aa63a31461009f578063fba013a4146100bd575b600080fd5b6100596100d9565b6040516100669190610d91565b60405180910390f35b61008960048036038101906100849190610961565b610124565b6040516100969190610d91565b60405180910390f35b6100a761013c565b6040516100b49190610c8d565b60405180910390f35b6100d760048036038101906100d2919061098a565b61028d565b005b600061011c6040518060400160405280600c81526020017f546f74616c20486974733a2000000000000000000000000000000000000000008152506000546106e0565b600054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561028457838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546101e990610f82565b80601f016020809104026020016040519081016040528092919081815260200182805461021590610f82565b80156102625780601f1061023757610100808354040283529160200191610262565b820191906000526020600020905b81548152906001019060200180831161024557829003601f168201915b5050505050815260200160028201548152505081526020019060010190610160565b50505050905090565b42610384600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546102db9190610eae565b1061031b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031290610d71565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546103719190610eae565b925050819055506103b76040518060400160405280601581526020017f257320686974207468652045544820626c756e742100000000000000000000008152503361077c565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610476929190610841565b50604082015181600201555050606460015442446104949190610eae565b61049e9190610eae565b6104a89190610fb4565b600181905550602a600154116105f4576104f76040518060400160405280600781526020017f257320776f6e21000000000000000000000000000000000000000000000000008152503361077c565b6000655af3107a4000905047811115610545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053c90610d31565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161056b90610c78565b60006040518083038185875af1925050503d80600081146105a8576040519150601f19603f3d011682016040523d82523d6000602084013e6105ad565b606091505b50509050806105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e890610d51565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f1dd690ba7388097ba80b144699297e873779effbc3faeb4d64875a8aa4cf1983428360405161063c929190610dac565b60405180910390a250565b6106dd8160405160240161065b9190610caf565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b50565b61077882826040516024016106f6929190610d01565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b6108148282604051602401610792929190610cd1565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084d90610f82565b90600052602060002090601f01602090048101928261086f57600085556108b6565b82601f1061088857805160ff19168380011785556108b6565b828001600101855582156108b6579182015b828111156108b557825182559160200191906001019061089a565b5b5090506108c391906108c7565b5090565b5b808211156108e05760008160009055506001016108c8565b5090565b60006108f76108f284610e0d565b610ddc565b90508281526020810184848401111561090f57600080fd5b61091a848285610f40565b509392505050565b600081359050610931816110b2565b92915050565b600082601f83011261094857600080fd5b81356109588482602086016108e4565b91505092915050565b60006020828403121561097357600080fd5b600061098184828501610922565b91505092915050565b60006020828403121561099c57600080fd5b600082013567ffffffffffffffff8111156109b657600080fd5b6109c284828501610937565b91505092915050565b60006109d78383610c0a565b905092915050565b6109e881610f04565b82525050565b6109f781610f04565b82525050565b6000610a0882610e4d565b610a128185610e70565b935083602082028501610a2485610e3d565b8060005b85811015610a605784840389528151610a4185826109cb565b9450610a4c83610e63565b925060208a01995050600181019050610a28565b50829750879550505050505092915050565b6000610a7d82610e58565b610a878185610e8c565b9350610a97818560208601610f4f565b610aa0816110a1565b840191505092915050565b6000610ab682610e58565b610ac08185610e9d565b9350610ad0818560208601610f4f565b610ad9816110a1565b840191505092915050565b6000610af1603483610e9d565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b57602783610e9d565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610bbd600083610e81565b9150600082019050919050565b6000610bd7600883610e9d565b91507f576169742031356d0000000000000000000000000000000000000000000000006000830152602082019050919050565b6000606083016000830151610c2260008601826109df565b5060208301518482036020860152610c3a8282610a72565b9150506040830151610c4f6040860182610c5a565b508091505092915050565b610c6381610f36565b82525050565b610c7281610f36565b82525050565b6000610c8382610bb0565b9150819050919050565b60006020820190508181036000830152610ca781846109fd565b905092915050565b60006020820190508181036000830152610cc98184610aab565b905092915050565b60006040820190508181036000830152610ceb8185610aab565b9050610cfa60208301846109ee565b9392505050565b60006040820190508181036000830152610d1b8185610aab565b9050610d2a6020830184610c69565b9392505050565b60006020820190508181036000830152610d4a81610ae4565b9050919050565b60006020820190508181036000830152610d6a81610b4a565b9050919050565b60006020820190508181036000830152610d8a81610bca565b9050919050565b6000602082019050610da66000830184610c69565b92915050565b6000604082019050610dc16000830185610c69565b8181036020830152610dd38184610aab565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e0357610e02611072565b5b8060405250919050565b600067ffffffffffffffff821115610e2857610e27611072565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610eb982610f36565b9150610ec483610f36565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ef957610ef8610fe5565b5b828201905092915050565b6000610f0f82610f16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f6d578082015181840152602081019050610f52565b83811115610f7c576000848401525b50505050565b60006002820490506001821680610f9a57607f821691505b60208210811415610fae57610fad611043565b5b50919050565b6000610fbf82610f36565b9150610fca83610f36565b925082610fda57610fd9611014565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110bb81610f04565b81146110c657600080fd5b5056fea26469706673582212209f3679023a365389e41db66010dd66c22775d524256e5c768e412337ee221bb364736f6c63430008000033",S="0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80636df4b40c146100515780636ede39391461006f578063c4aa63a31461009f578063fba013a4146100bd575b600080fd5b6100596100d9565b6040516100669190610d91565b60405180910390f35b61008960048036038101906100849190610961565b610124565b6040516100969190610d91565b60405180910390f35b6100a761013c565b6040516100b49190610c8d565b60405180910390f35b6100d760048036038101906100d2919061098a565b61028d565b005b600061011c6040518060400160405280600c81526020017f546f74616c20486974733a2000000000000000000000000000000000000000008152506000546106e0565b600054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561028457838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546101e990610f82565b80601f016020809104026020016040519081016040528092919081815260200182805461021590610f82565b80156102625780601f1061023757610100808354040283529160200191610262565b820191906000526020600020905b81548152906001019060200180831161024557829003601f168201915b5050505050815260200160028201548152505081526020019060010190610160565b50505050905090565b42610384600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546102db9190610eae565b1061031b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031290610d71565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546103719190610eae565b925050819055506103b76040518060400160405280601581526020017f257320686974207468652045544820626c756e742100000000000000000000008152503361077c565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610476929190610841565b50604082015181600201555050606460015442446104949190610eae565b61049e9190610eae565b6104a89190610fb4565b600181905550602a600154116105f4576104f76040518060400160405280600781526020017f257320776f6e21000000000000000000000000000000000000000000000000008152503361077c565b6000655af3107a4000905047811115610545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053c90610d31565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161056b90610c78565b60006040518083038185875af1925050503d80600081146105a8576040519150601f19603f3d011682016040523d82523d6000602084013e6105ad565b606091505b50509050806105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e890610d51565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f1dd690ba7388097ba80b144699297e873779effbc3faeb4d64875a8aa4cf1983428360405161063c929190610dac565b60405180910390a250565b6106dd8160405160240161065b9190610caf565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b50565b61077882826040516024016106f6929190610d01565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b6108148282604051602401610792929190610cd1565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084d90610f82565b90600052602060002090601f01602090048101928261086f57600085556108b6565b82601f1061088857805160ff19168380011785556108b6565b828001600101855582156108b6579182015b828111156108b557825182559160200191906001019061089a565b5b5090506108c391906108c7565b5090565b5b808211156108e05760008160009055506001016108c8565b5090565b60006108f76108f284610e0d565b610ddc565b90508281526020810184848401111561090f57600080fd5b61091a848285610f40565b509392505050565b600081359050610931816110b2565b92915050565b600082601f83011261094857600080fd5b81356109588482602086016108e4565b91505092915050565b60006020828403121561097357600080fd5b600061098184828501610922565b91505092915050565b60006020828403121561099c57600080fd5b600082013567ffffffffffffffff8111156109b657600080fd5b6109c284828501610937565b91505092915050565b60006109d78383610c0a565b905092915050565b6109e881610f04565b82525050565b6109f781610f04565b82525050565b6000610a0882610e4d565b610a128185610e70565b935083602082028501610a2485610e3d565b8060005b85811015610a605784840389528151610a4185826109cb565b9450610a4c83610e63565b925060208a01995050600181019050610a28565b50829750879550505050505092915050565b6000610a7d82610e58565b610a878185610e8c565b9350610a97818560208601610f4f565b610aa0816110a1565b840191505092915050565b6000610ab682610e58565b610ac08185610e9d565b9350610ad0818560208601610f4f565b610ad9816110a1565b840191505092915050565b6000610af1603483610e9d565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b57602783610e9d565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610bbd600083610e81565b9150600082019050919050565b6000610bd7600883610e9d565b91507f576169742031356d0000000000000000000000000000000000000000000000006000830152602082019050919050565b6000606083016000830151610c2260008601826109df565b5060208301518482036020860152610c3a8282610a72565b9150506040830151610c4f6040860182610c5a565b508091505092915050565b610c6381610f36565b82525050565b610c7281610f36565b82525050565b6000610c8382610bb0565b9150819050919050565b60006020820190508181036000830152610ca781846109fd565b905092915050565b60006020820190508181036000830152610cc98184610aab565b905092915050565b60006040820190508181036000830152610ceb8185610aab565b9050610cfa60208301846109ee565b9392505050565b60006040820190508181036000830152610d1b8185610aab565b9050610d2a6020830184610c69565b9392505050565b60006020820190508181036000830152610d4a81610ae4565b9050919050565b60006020820190508181036000830152610d6a81610b4a565b9050919050565b60006020820190508181036000830152610d8a81610bca565b9050919050565b6000602082019050610da66000830184610c69565b92915050565b6000604082019050610dc16000830185610c69565b8181036020830152610dd38184610aab565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e0357610e02611072565b5b8060405250919050565b600067ffffffffffffffff821115610e2857610e27611072565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610eb982610f36565b9150610ec483610f36565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ef957610ef8610fe5565b5b828201905092915050565b6000610f0f82610f16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f6d578082015181840152602081019050610f52565b83811115610f7c576000848401525b50505050565b60006002820490506001821680610f9a57607f821691505b60208210811415610fae57610fad611043565b5b50919050565b6000610fbf82610f36565b9150610fca83610f36565b925082610fda57610fd9611014565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110bb81610f04565b81146110c657600080fd5b5056fea26469706673582212209f3679023a365389e41db66010dd66c22775d524256e5c768e412337ee221bb364736f6c63430008000033",P={},L={};var R={_format:k,contractName:x,sourceName:A,abi:B,bytecode:M,deployedBytecode:S,linkReferences:P,deployedLinkReferences:L};const O=()=>{const[u,r]=l.exports.useState(""),[m,o]=l.exports.useState([]),[e,a]=l.exports.useState(""),d="0xfbc7Ee45A8CeB763D1aabC8533d01c69aFcF685a",p=R.abi,v=async()=>{try{const{ethereum:f}=window;if(f){const n=new g(f).getSigner(),i=await new h(d,p,n).getAllHits();let c=[];i.forEach((y,W)=>{c.push({address:y.smoker,timestamp:new Date(y.timestamp*1e3),message:y.message})}),c.reverse(),o(c)}}catch{}};l.exports.useEffect(()=>{let f;const t=(n,s,i)=>{console.log("NewHit",n,s,i),o(c=>[...c,{address:n,timestamp:new Date(s*1e3),message:i}])};if(window.ethereum){const s=new g(window.ethereum).getSigner();f=new h(d,p,s),f.on("NewHit",t)}return()=>{f&&f.off("NewHit",t)}},[]);const E=async()=>{try{const{ethereum:f}=window;if(f)v();else return;const t=await f.request({method:"eth_accounts"});if(t.length!==0){const n=t[0];r(n)}}catch{}},N=async()=>{try{const{ethereum:f}=window;if(!f){alert("Get MetaMask!");return}const t=await f.request({method:"eth_requestAccounts"});r(t[0])}catch{}},w=async f=>{try{const{ethereum:t}=window;if(t){const s=new g(t).getSigner(),c=await new h(d,p,s).smokeTheBlunt(f,{gasLimit:3e5});console.log("Mining...",c.hash),await c.wait(),console.log("Mined -- ",c.hash)}}catch{}},T=()=>{e.length>0?w(e):w("Anon")};return l.exports.useEffect(()=>{E()},[]),b.createElement("div",{className:"mainContainer"},b.createElement("div",{className:"dataContainer"},b.createElement("header",null,b.createElement("div",{className:"header-title"},"\u{1F973}\u{1F4A8} Hit the ETH Blunt"),u&&b.createElement("div",{className:"input-container"},b.createElement("label",null,"Enter your name:"),b.createElement("input",{type:"text",value:e,onChange:f=>a(f.target.value)}),b.createElement("button",{className:"smokeButton",onClick:T},"Smoke the ETH Blunt")),!u&&b.createElement("div",{className:"bio"},"Connect your Ethereum wallet to hit the ETH blunt"),!u&&b.createElement("button",{className:"connectWalletButton",onClick:N},"Connect Wallet")),m.length>0&&b.createElement("div",{className:"blunt-log-title"},"Blunt Log"),m.map((f,t)=>b.createElement("div",{key:t,className:"hit-info-container"},b.createElement("div",null,f.message," hit the ETH blunt at ",f.timestamp.toLocaleTimeString()),b.createElement("div",null,f.address)))))};C.render(b.createElement(b.StrictMode,null,b.createElement(O,null)),document.getElementById("root"));