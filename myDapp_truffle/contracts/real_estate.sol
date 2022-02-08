// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract real_estate{
    uint public count =0;
     
  struct product{
    string title;
    address seller;
    address buyer;
    uint256 price;
}
mapping(uint =>product) public products;

    function addProduct(string memory _title, address  _seller,uint256  _price) public  {
    products[count++]=product(_title,_seller,msg.sender,_price);

    }
   

    function getProduct(uint _id) public view returns( product memory ) {
        return  products[_id];
    }

  //afficher les historiques de vente d'un produit (cherchant par son titre de propriété)

 function getHistoryProduct(string memory _title) public view returns (product[] memory){
        product[] memory histo = new product[](count);
        for (uint j = 0; j < count; j++) {
                     //verifier si le titre d'acquisition est le meme de chaque product[j]
            if(keccak256(abi.encodePacked((products[j].title))) == keccak256(abi.encodePacked((_title))))  {
               histo[j] = products[j];
            }
        }
        return histo;
    }
     //afficher tous les transactions
     function getAllProducts() public view returns (product[] memory){
        product[] memory all = new product[](count);
        for (uint j = 0; j < count; j++) {
           
               all[j] = products[j];
            
        }
        return all;
    }
    //afficher les transactions d'un utilisateur
     function getMyTransactions() public view returns (product[] memory){
        product[] memory mine = new product[](count);
        for (uint j = 0; j < count; j++) {
            //verifier si le demandeur est soit le vendeur ou l'acheteur(retourner ses transactions)
            if((products[j].buyer==msg.sender || products[j].seller==msg.sender) ){
               mine[j] = products[j];
            }
        }
        return mine;
    }
    
  
    

  

}
