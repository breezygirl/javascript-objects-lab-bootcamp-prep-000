var recipes = {
  eggs: 'three',
  onions: 'one',
  peppers: 'greens',
  salt: 'pinch',
  butter: 'tablespoon'
  }
  
  function updateObjectWithKeyAndValue(object, key, value) {
object[key] = value
 
 return object
  }
function updateObjectWithKeyAndValue(object, key, value) {
 var newObject= Object.assign({},object, {[key]:value} )

return newObject

      }
      function  deleteFromObjectByKey(object, key){
     delete key.eggs
     return object
   }
    function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ 
     
     object[key]= value
   return object}
    
    function destructivelyDeleteFromObjectByKey(object, key){
      
      delete key.salt
      return true
    }
  
  function deleteFromObjectByKey(object, key){
  }