
document.addEventListener('DOMContentLoaded', function () {

  let product = false;

  new Splide('#top_splide', {
    perPage: 3,
    movePage: 1,
    gap: "30px",
    pagination: false,
    breakpoints: {
      1050: {
        perPage: 3,
        gap    : '.7rem',
        height : 'auto',
      },
      768: {
        perPage: 2,
        gap    : '.7rem',
        height : 'auto',
      },
    },
  }).mount();

  new Splide('#bott_splide', {
    perPage: 3,
    gap: "30px",
    pagination: false,
    breakpoints: {
      1050: {
        perPage: 3,
        gap    : '.7rem',
        height : 'auto',
      },
      768: {
        perPage: 2,
        gap    : '.7rem',
        height : 'auto',
      },
    },
  }).mount();


  $('#description').on('click',function(){
    $('#description_content').toggleClass('c_hidden');
    $('#description_button').toggleClass('description_underline');
  });

  $('#tech_specs').on('click',function(){
    $('#tech_specs_content').toggleClass('c_hidden');
    $('#tech_specs_button').toggleClass('description_underline');
  });

  $('.side_img').on('click',function(){
    let src = $(this).attr('data-url');
    let arr = src.split('.');
    console.log(src);

    if(arr[1] == 'mp4'){
      $('#main_view_img').addClass('c_hidden');
      $('#main_view_vid').removeClass('c_hidden');
      $('#main_view_vid').attr('src',src);
    }else {
      $('#main_view_vid').attr('src',src);
      $('#main_view_img').removeClass('c_hidden');
      $('#main_view_vid').addClass('c_hidden');
      $('#main_view_img').attr('src',src);
    }
  });

  $('.product_show').on('click',()=>{
    $('.show-product').removeClass('hide-product');
    $('.close-product-parrent').removeClass('c_hidden');
  });

  $('.close-product').on('click',()=>{
    $('.show-product').addClass('hide-product');
    $('.close-product-parrent').addClass('c_hidden');
  });

  $('#about-us-btn').on('click',(e)=>{
    e.preventDefault();
    
    $('#about-us').toggleClass('c_hidden');
  });

  $('#about-us-close').on('click',()=>{
    $('#about-us').toggleClass('c_hidden');
  });

  $('#faqs-btn').on('click',(e)=>{
    e.preventDefault();
    
    $('#FAQs-pos').toggleClass('c_hidden');
  });

  $('#faqs-close').on('click',()=>{
    $('#FAQs-pos').toggleClass('c_hidden');
  });

  $('#contact-btn').on('click',(e)=>{
    e.preventDefault();
    
    $('#contact-pos').toggleClass('c_hidden');
  });

  $('#contact-close').on('click',()=>{
    $('#contact-pos').toggleClass('c_hidden');
  });

  $('#review-btn').on('click',(e)=>{
    e.preventDefault();
    
    $('#review-pos').toggleClass('c_hidden');
  });

  $('#review-close').on('click',()=>{
    $('#review-pos').toggleClass('c_hidden');
  });

  $('.submit-review').on('click',(e)=>{
    e.preventDefault;
    $('#review-pos').toggleClass('c_hidden');
  });

});
