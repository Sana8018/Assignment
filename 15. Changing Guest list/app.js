var guest_list = ['saif', 'sana', 'ayesha', 'rimsha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + guest_list[i] + "\nwe invited you on dinner tommorrow.\nThank you\n");
}
var not_present = 'ayesha';
var new_guest = 'sehrish';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + guest_list[i] + "\nwe invited you on dinner tommorrow.\nThank you\n");
}
console.log("Mr. ".concat(not_present, " will not coming tommorrow"));
