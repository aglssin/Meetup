export default (value) => {
 var date = new Date(value)
 return date.toLocaleDateString('en-US',{year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'})
}