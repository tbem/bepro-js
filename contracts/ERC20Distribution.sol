pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./utils/Ownable.sol";

contract ERC20Distribution is Pausable, Ownable {
    using SafeMath for uint256;

    uint256 constant public decimals = 1 ether;
    address[] public tokenOwners ; /* Tracks distributions mapping (iterable) */
    uint256 public TGEDate = 0; /* Date From where the distribution starts (TGE) */
    uint256 constant public month = 30 days;
    uint256 constant public year = 365 days;
    uint256 public lastDateDistribution = 0;
    
    mapping(address => DistributionStep[]) public distributions; /* Distribution object */
    
    IERC20 public erc20;

    struct DistributionStep {
        uint256 amountAllocated;
        uint256 currentAllocated;
        uint256 unlockDay;
        uint256 amountSent;
    }

    constructor() public{
        
        // IDO
        setInitialDistribution(0x5042Ce01BD178C97f287C01C7b21edBf27b9b1B7, 640000000, 0 /* No Lock */);

        /* Team */
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 6*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 7*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 8*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 9*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 10*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 11*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 12*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 13*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 14*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 15*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333333, 16*month);
        setInitialDistribution(0x8654D5b4e31B967de221AA1B64e87578f657BD38, 133333337, 17*month);
        

        /* Private Sale */
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 352000000, 0 /* No Lock */);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 3*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 4*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 5*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 6*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 7*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 8*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 9*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444444, 10*month);
        setInitialDistribution(0x15084c71Eb33cac0C9CAF2B77bE3E85AB8A5327F, 156444448, 11*month);

        /* New Rights */
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 560000000, 0 /* No Lock */);
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 560000000, 3*month);
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 560000000, 6*month);
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 560000000, 9*month);
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 1120000000, 12*month);
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 1120000000, 18*month);
        setInitialDistribution(0x381B0E5950D9380627aABA82A3F69adE382297F1, 1120000000, 24*month);

        /* Treasury */
        setInitialDistribution(0xabb786B855B5Bf9cdEc5f0537a0A084C8Fe8a18f, 320000000, 0 /* No Lock */);
        setInitialDistribution(0xabb786B855B5Bf9cdEc5f0537a0A084C8Fe8a18f, 320000000, 6*month);
        setInitialDistribution(0xabb786B855B5Bf9cdEc5f0537a0A084C8Fe8a18f, 320000000, 12*month);
        setInitialDistribution(0xabb786B855B5Bf9cdEc5f0537a0A084C8Fe8a18f, 1120000000, 18*month);
        setInitialDistribution(0xabb786B855B5Bf9cdEc5f0537a0A084C8Fe8a18f, 1120000000, 24*month);

        /* Liquidity */
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 320000000, 0 /* No Lock */);
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 320000000, 3*month);
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 640000000, 6*month);
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 640000000, 9*month);
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 640000000, 12*month);
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 320000000, 18*month);
        setInitialDistribution(0xaB29129F1f1279cD22Df713Cf011f01E3A881f16, 320000000, 24*month);

    }

    function setTokenAddress(IERC20 _tokenAddress) external onlyOwner whenNotPaused  {
        erc20 = _tokenAddress;
    }
    
    function safeGuardAllTokens(address _address) external onlyOwner whenPaused  { /* In case of needed urgency for the sake of contract bug */
        require(erc20.transfer(_address, erc20.balanceOf(address(this))));
    }

    function setTGEDate(uint256 _time) external onlyOwner whenNotPaused  {
        TGEDate = _time;
    }

    /**
    *   Should allow any address to trigger it, but since the calls are atomic it should do only once per day
     */

    function triggerTokenSend() external whenNotPaused  {
        /* Require TGE Date already been set */
        require(TGEDate != 0, "TGE date not set yet");
        /* TGE has not started */
        require(block.timestamp > TGEDate, "TGE still hasn´t started");
        /* Test that the call be only done once per day */
        require(block.timestamp.sub(lastDateDistribution) > 1 days, "Can only be called once a day");
        lastDateDistribution = block.timestamp;
        /* Go thru all tokenOwners */
        for(uint i = 0; i < tokenOwners.length; i++) {
            /* Get Address Distribution */
            DistributionStep[] memory d = distributions[tokenOwners[i]];
            /* Go thru all distributions array */
            for(uint j = 0; j < d.length; j++){
                if( (block.timestamp.sub(TGEDate) > d[j].unlockDay) /* Verify if unlockDay has passed */
                    && (d[j].currentAllocated > 0) /* Verify if currentAllocated > 0, so that address has tokens to be sent still */
                ){
                    uint256 sendingAmount;
                    sendingAmount = d[j].currentAllocated;
                    distributions[tokenOwners[i]][j].currentAllocated = distributions[tokenOwners[i]][j].currentAllocated.sub(sendingAmount);
                    distributions[tokenOwners[i]][j].amountSent = distributions[tokenOwners[i]][j].amountSent.add(sendingAmount);
                    require(erc20.transfer(tokenOwners[i], sendingAmount));
                }
            }
        }   
    }

    function setInitialDistribution(address _address, uint256 _tokenAmount, uint256 _unlockDays) internal onlyOwner whenNotPaused {
        /* Add tokenOwner to Eachable Mapping */
        bool isAddressPresent = false;

        /* Verify if tokenOwner was already added */
        for(uint i = 0; i < tokenOwners.length; i++) {
            if(tokenOwners[i] == _address){
                isAddressPresent = true;
            }
        }
        /* Create DistributionStep Object */
        DistributionStep memory distributionStep = DistributionStep(_tokenAmount * decimals, _tokenAmount * decimals, _unlockDays, 0);
        /* Attach */
        distributions[_address].push(distributionStep);

        /* If Address not present in array of iterable token owners */
        if(!isAddressPresent){
            tokenOwners.push(_address);
        }
    }
}