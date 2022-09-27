
for (var link of document.querySelectorAll('.js-menu-link')) {
    link.addEventListener('click', function(event) {
         event.preventDefault(); 
         var href = this.getAttribute('href');         
         var element = document.querySelector(href); 
         var top = element.getBoundingClientRect().top; 
         var headerHight = document.querySelector('.js-header').offsetHeight; 
         var scroll = top - headerHight;

         document.querySelector('.js-burger').click();

         window.scrollBy({top: scroll, behavior: 'smooth'}); 
        });

}

document.querySelector('.js-burger').addEventListener('click', function(event) {
    this.classList.toggle('is_active');   
 this.parentElement.querySelector('.js-header-dropdown').classList.toggle('is_active');
 
});

document.addEventListener('scroll', function() {
    var scrolled = document.documentElement.scrollTop;
    var sectionFirst = document.querySelector('.js-sectionfirst');
    var top = sectionFirst.offsetTop;
    var height = sectionFirst.offsetHeight;
    var headerHight = document.querySelector('.js-header').offsetHeight;
    
    if (scrolled >= top + height - headerHight) {
    document.querySelector('.js-header').classList.add('is_invert');
    document.querySelector('.logo_white').classList.add('is_invert');
    document.querySelector('.logo_orange').classList.add('is_close');
    document.querySelector('.fb-fixed').classList.add('is_invert');
    document.querySelector('.fb').classList.add('is_close');
    document.querySelector('.vk-fixed').classList.add('is_invert');
    document.querySelector('.vk').classList.add('is_close');
    

    } else {
        document.querySelector('.js-header').classList.remove('is_invert');
        document.querySelector('.logo_white').classList.remove('is_invert');
        document.querySelector('.logo_orange').classList.remove('is_close');
        document.querySelector('.fb-fixed').classList.remove('is_invert');
        document.querySelector('.fb').classList.remove('is_close');
        document.querySelector('.vk-fixed').classList.remove('is_invert');
        document.querySelector('.vk').classList.remove('is_close');
        
    }
    


    for (var link of document.querySelectorAll('.js-menu-link')) {   

     if (scrolled >= top + height - headerHight) {
        link.classList.add('is_invert');    
        }  else {
            link.classList.remove('is_invert');
        }          
    }
});

for (var accordionHead of document.querySelectorAll('.js-accordion-item-head')) { 
    accordionHead.addEventListener('click', function(){
        
        var accordionContent = this.nextElementSibling;

if(this.parentElement.classList.contains('is-active')){
    this.parentElement.classList.remove('is-active');
    accordionContent.style.maxHeight = '0px';
} else {
    this.parentElement.classList.add('is-active');
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
}       

    })
    
}

$(document).ready(function() {
    $('.carousel-js').slick({
        arrows:  true,
        dots: true,
        fade: true,
    });

    $('.select-js').select2({
        minimumResultsForSearch: Infinity
    });

    $('.phone-js').inputmask('+7 (999) 999-99-99');
    $.validator.addMethod('phone-js', function(value , element){
        return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
    }, 'Введите корректный номер');

    $.validator.addMethod("email-js", function(value, element) {
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    }, "Введите корректный email");

    $('.form-js').validate({
        errorPlacement: function(error, element) {
            var $parent = element.parent();
            $parent.append(error);
        },
        submitHandler: function(form) {
            $(form).trigger("formSubmit");
        }        
    });

    $('.form-js').on('formSubmit', function() {
        //alert('Форма отправлена');
    });

    $('.input-name-js').on('input', function() {
        var value = $(this).val();
        value = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/ig, '');
        $(this).val(value);
    });

   
});

/*popup*/

document.querySelector('.main_button').addEventListener('click', function(){    
    document.querySelector('.popup-js').classList.add('is-open');   
    var scrolled = window.pageYOffset; 
    document.documentElement.style.overflow = 'hidden'; 
    setTimeout(function() { 
        document.documentElement.scrollTop = scrolled;
    }, 0 ); 
    return false; 
});
document.querySelector('.line-popup-js').addEventListener('click', function() {
    document.querySelector('.popup-js').classList.remove('is-open');
    document.querySelector('.popup-input-js').value = "";
    document.getElementById('password').value = "";
    document.documentElement.style.overflow = 'auto';   
});
document.addEventListener('click', function(event) {
    if(event.target.closest('.popup') && !event.target.closest('.popup__content')) {        
            document.querySelector('.popup-js').classList.remove('is-open');
            document.documentElement.style.overflow = 'auto';            
        }
    
});


     
     