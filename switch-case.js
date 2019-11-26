let role = 'moderator';

switch (role) {
  case 'guest':
    console.log('guest user');
    break;

  case 'moderator':
    console.log('moderator user');
    break;

  default:
    console.log('default user');
}

// or you could use the IF statement 

if (role === 'guest') {
  console.log('guest user');

} else if (role === 'moderator') {
  console.log('moderator');
  
} else {
  console.log('default user');
}