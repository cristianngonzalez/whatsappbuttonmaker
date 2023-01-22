//Dom elements
let element_whatsapplink = document.getElementsByClassName('whatsapplink')[0]

//---------------------------------------------------------------------------
//Vue Class
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!',
    messageConverted: 'Hello!',
    countries: allCountries,
    countrySelected: '54',
    phoneNumber: '',
    color: '#00CC33',
    position: 'left'
  },
  methods:{
    /*To copy the code*/
    copyToClipBoard(event , id){
      //Restore all copy buttons
      let buttons = document.getElementsByClassName('copyButton')
      buttons[0].innerHTML = 'Copy';
      buttons[1].innerHTML = 'Copy';

      //Change text this copy button
      event.target.innerHTML = 'Copied!'

      //Copy to clipboard
      const str = document.getElementById(id);
      window.getSelection().selectAllChildren(str);
      document.execCommand("Copy");
    },

    /*Change message*/
    changeMessage(event){

      this.messageConverted = this.message.replace(/ /g , '%20');

      console.log(this.messageConverted)


      //There is an example element, let's change the href with the message
      element_whatsapplink.setAttribute('href' , '`https://api.whatsapp.com/send?phone=${this.countrySelected}${this.phoneNumber}&text=${this.messageConverted}`')
    },

    changeNumber(event){
      //There is an example element, let's change the href with the message
      element_whatsapplink.setAttribute('href' , '`https://api.whatsapp.com/send?phone=${this.countrySelected}${this.phoneNumber}&text=${this.messageConverted}`')
    },

    setPosition(event , position){
      //Toggle class pushed button
      let buttons = document.getElementsByClassName('buttonPosition')
      buttons[0].classList.remove('active');
      buttons[1].classList.remove('active');

      event.target.classList.add('active');

      this.position = position;

      //There is a example button, also let's change position it.
      if(position == 'left'){
        element_whatsapplink.style.right = 'auto';
        element_whatsapplink.style.left = '40px';
      }else{
        element_whatsapplink.style.left = 'auto';
        element_whatsapplink.style.right = '40px';
      }
    },

    changeColor(event){
      //There is a example button, also let's change color it.
      element_whatsapplink.style.backgroundColor = event.target.value
    }
  }


})

