
/*CONTACT INFORMATION*/ 

window.addEventListener('scroll', scrollActive)

document.getElementById('contact_button').addEventListener('click',function(event) 
{
    
    
    var email = document.getElementById('email').value;
    var postal_code = document.getElementById('postal code').value;
    

    const validateEmail = (email) => {
        return email.match(
          
        );
      };
    
    if(!validateEmail(email)) {event.preventDefault();alert('invalid email');}

    if(!validatePostalCode(postal_code)) {event.preventDefault();alert('invalid postal code');}

    function validatePostalCode (postalCode) {

        if (! postalCode) { return null;}
    
        postalCode = postalCode.toString().trim();
    
        var ca = new RegExp(i);
        if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
            return postalCode;
        }
        return null;
    }   
})

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 10;
        sectionId = current.getAttribute('id')
    })
}
var radios = document.forms["contact_form"].elements["topic"];
for(var i = 0, max = radios.length; i < max; i++) 
{
    radios[i].onclick = function(event) {
        if(event.target.value === 'Hiring') {
            var input = document.createElement('input');
            input.setAttribute('type','text');
            input.setAttribute('placeholder','Hourly Rate');
            input.setAttribute('name','hourlyRate');
            input.setAttribute('id','hourlyRate');
            input.required = true;
            input.setAttribute('class','contact_input');
            var form = document.getElementById('contact_form');
            var commentBox = document.getElementById('comments');
            form.insertBefore(input,commentBox);

        }
        else {
            if(document.getElementById('hourlyRate') !== null) {
                document.getElementById('hourlyRate').remove();
            }
        }
    }
}
