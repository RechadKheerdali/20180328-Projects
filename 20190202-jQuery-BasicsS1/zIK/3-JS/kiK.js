// to print html on screen

    const printD = html => { document.write(`${html} <hr>`) };

/*************************************************************/

// Getting all the .style information of the element (including external sheet)

    const everyStyles = (DOMelement) => {                 //.1
        const element = DOMelement;
        let outcome = "";
        const elementStyle = element.style;
        const computedStyle = window.getComputedStyle(element, null);

        for (vPropName in elementStyle) {
          if (elementStyle.hasOwnProperty(vPropName)) {
            outcome += `${vPropName} => " ${elementStyle[vPropName]} " <> " ${computedStyle[vPropName]} "\n`;
          }
        }
        return console.log(outcome)
    };

    //.1 ensure DOMelement has already inserted index number if necessary
    /* ${elementStyle[vPropName]}  = not sure what this does as it seem to make no difference if i delete it.*/

/*****************************************/

// ascii order function
       // this is a ascii table chart, for you to test which is greater according to the order list. so in doubt quickly use this to find out
        // var a = "z";
        // var b = "†";

    const ascii = (a, b) => {
      if ( a > b ) {
          console.log(`ASCII result = "${a}" is > greater than "${b}"`);
          }
      else if ( a === b ) {
          console.log(`ASCII result = "${a}" = equals "${b}"`);
          }
      else if( a < b ) {
          console.log(`ASCII result = "${a}" < is less than "${b}"`);
          }
    };

/*****************************************/
