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
 
 object['key2'] = 'value2'
 
     
        return object

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
    
  function  destructivelyDeleteFromObjectByKey()o{
    
    delete object.key
    return object
  }