pragma solidity ^0.5.1 ;



contract SimpleStorage
{
    uint public storeData = 0;
    
    function set(uint x) public {
        storeData = x;
    }
    
    function increment(uint n) public {
        storeData = storeData + n;
    }
    
    function decrement(uint n) public {
        storeData = storeData - n;
    }
    
}
