//the global array where all the details tag would be stored
      let detsArray = new Array()

      //the initiator of the program which would run immediately the page loads
      const init = () => {

        let dets = document.querySelectorAll( 'details' );
      for ( var i = 0; i < dets.length; i++ ) {
        if ( dets[i].className == 'detail' ) detsArray.push( dets[i] );
      }

        // console.log(detsArray.length)
        // console.log(detsArray)

        // The click EventListener click events to summary tags
        for ( let i = 0; i < detsArray.length; i++ ) {
          let sum = getFirstChildWithTagName( detsArray[i],  'SUMMARY')
          sum.addEventListener("click", toggleDetails)
        }
      }
      
      //Fuction to get the first child tagname from the global array
      const getFirstChildWithTagName = ( element, tagName ) => {
        for ( var i = 0; i < element.childNodes.length; i++ ) {
          if ( element.childNodes[i].nodeName == tagName ) {
          return element.childNodes[i]
          }
        }
      }

      //the detail onclick toggle function
      const toggleDetails = (target) => {
        
        // Hide all items
        for ( var i = 0; i < detsArray.length; i++ ) {
          detsArray[i].removeAttribute('open')
        }

        // Show this item if it was previously hidden
        if ( detsArray[i] == target ) {
          detsArray[i].createAttribute('open')
        }
      }