function showMenu() {document.getElementById('menu').classList.remove('hidden');
   document.getElementById('showIcon').style.display = 'none';
   document.getElementById('hideIcon').style.display = 'block';
}function hideMenu() {document.getElementById('menu')
   .classList.add('hidden');document.getElementById('showIcon').style.display= 'block'; 
   document.getElementById('hideIcon').style.display = 'none';
}function sendEmail() 
{const userName = document.getElementById('userName')
   .value;const userEmail = document.getElementById('userEmail').
   value;const subject = document.getElementById('subject').value;
   const message = document.getElementById('message').value;
   const mailtoLink = `mailto:VoidOfficial77@gmail.com?subject=$
   {encodeURIComponent(subject)}&body=$
   {encodeURIComponent(message)}
   %0D%0A%0D%0AFrom,%0D%0A$
   {encodeURIComponent(userName)}
   %0D%0A$
   {encodeURIComponent(userEmail)}`;
   window.location.href = mailtoLink;}