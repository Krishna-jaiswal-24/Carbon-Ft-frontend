// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CarbonFootprintRegistry {
    // Struct to store company data
    struct Company {
        address payable walletAddress;
        uint256 totalEmission;
        uint256 timestamp;
    }

    // Mapping to store company data by their address
    mapping(address => Company) public companies;

    // Event to be emitted when a company registers
    event CompanyRegistered(
        address indexed companyAddress,
        uint256 totalEmission,
        uint256 timestamp
    );

    // Function to register a company's carbon footprint
    function registerCompany(uint256 _totalEmission) public {
        // Require that the message sender provides a valid emission value
        require(_totalEmission > 0, "Total emission must be greater than zero");

        // Get current timestamp
        uint256 timestamp = block.timestamp;

        // Cast msg.sender to address payable (not strictly necessary here)
        address payable sender = payable(msg.sender);

        // Store company data
        companies[sender] = Company(sender, _totalEmission, timestamp);

        // Emit the CompanyRegistered event
        emit CompanyRegistered(sender, _totalEmission, timestamp);
    }

    // Function to retrieve a company's registered data
    function getCompanyData(
        address _companyAddress
    )
        public
        view
        returns (
            address payable walletAddress,
            uint256 totalEmission,
            uint256 timestamp
        )
    {
        Company memory company = companies[_companyAddress];
        return (
            company.walletAddress,
            company.totalEmission,
            company.timestamp
        );
    }
}
