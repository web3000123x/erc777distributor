# ERC777Distributor
A project that enables users to easily create smart addresses which receive ERC777 tokens and distribute automatically to the share holders.

## Technologies Used
- Superfluid
- Truffle
- Solidity
- The Graph
- Infuria
- Metamask
- Ethers

## Costs Incurred for usage
We have used clone factory pattern to minimize the cost of creation of a new account.
- Costs for Account owners
    - Account Creation
    - Receiver Addition
    - Receiver Deletion
    - Receiver percentage modification
    - Account/Receiver Name modification
- Costs for receiver
    - One time approval fees for every token & account they are subscribed to
- Fund provider
    - A fixed transaction fee

## Future Roadmap
- Catching the events from emitter to update the data.
- Public links of accounts displaying all the details
- Matic & Mainnet Deployment
- Timeline showing
    - Addition of receivers
    - Deletion of receivers
    - Fund disbursement
- Individual level fund disbursement tracking
- Pause logic
- Improving the precision for the percentage calculation
- Ability to add more ERC777 tokens
- Handle decimal value for shares
- Mobile compatibility
- Prevent addition of the account as a receiver in itself in the main UI itself. Right now it is prevented in the smart contract

## Other Repositories
- Subgraph for IDA: https://github.com/iamsahu/ida
- Subgraph for ERC777 distributor events: https://github.com/iamsahu/distriemitter
- Approver application for receivers to easily approve subscription: https://github.com/iamsahu/erc777approver

## Sample Costs (In ETH subject to gas price)

- BaseDistributor: 0.07700764
- Emitter: 0.01705986 
- Factory: 0.0246285
- Account creation: 0.000768679
- Depositing & distributing funds: 0.000316424