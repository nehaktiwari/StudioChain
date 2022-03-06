import React from 'react'
import Login from './Components/Login.js'
import Web3 from 'web3';
//import { Navbar } from 'react-bootstrap';
// import Navbar from './Components/Navbar.js';



class App extends React.Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    //Setting up Web3
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3 //Declare Web3
    console.log(web3)


    //Load account
    const accounts = await web3.eth.getAccounts()
    
    const acco=this.setState({ account: accounts[0] })
    console.log(accounts[0])
    
  }
  render() {
    return (<>
      <Login/>
      </>
    )
  }
}

export default App;
