var guest_list = ['saif', 'sana', 'ayesha', 'rimsha'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Sir/Madam ' + guest_list [i] + `\nwe invited you on dinner tommorrow.\nThank you\n`);
// } 
var not_present = 'ayesha';
var new_guest = 'sehrish';
guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Sir/Madam ' + guest_list [i] + `\nwe invited you on dinner tommorrow.\nThank you\n`);
// }
guest_list.unshift('samina', 'sumaima', 'subhan');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Sir/Madam ' + guest_list [i] + `\nwe invited you on dinner tommorrow.\nThank you\n`);
// }
console.log('\nunfortunately we can not arrange big table, only twp people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("soryy sirMadam. ".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + guest_list[i] + "\nyes you are still invited on tommorrow dinner\nThank you\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
