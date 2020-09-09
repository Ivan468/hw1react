import React, { Component } from 'react'
// import './styles.css'
// import "./contacts.css"




const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component {
    state = {
        contacts: [...contacts],
        filtred: [...contacts],     
        search: ''
     
    }
  
  
    
    handleSearchChange = async(e) => {
        await  this.setState({search: e.target.value});  
       this.qwe();           
     };
  
    qwe = () => {
         this.setState(() => {
            const osnova = this.state.search.toLowerCase();
            const filtr = this.state.contacts.filter(item =>
                item.firstName.toLowerCase().includes(osnova) ||
                item.lastName.toLowerCase().includes(osnova) ||
                item.phone.toLowerCase().includes(osnova) )
               
                return {
                    filtred: [...filtr]
                }
            });
    }

   
    render(){     
                 
        return (
            
            <div className="osnova">
                <div className="head">
                    <h1 className="h1">Контакты</h1>
                    <input className="search__btn" type="search" placeholder="Search..." value={this.state.search}
                   onChange={this.handleSearchChange}>
                       </input>
                    
                   
                    { this.state.filtred.map((cnt) => (
                <div className="contactHead">
                    <span className="contactName">  {cnt.firstName}<br/></span>
                    <span className="contactName">  {cnt.lastName}</span>
                    <span>    ({cnt.phone})</span>
                    <span>    {cnt.gender} <hr/></span>
                    
                </div>
            )) }
                </div>
            </div>
        
        )     
        
    }
}

export default Contacts