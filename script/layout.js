$(window).scroll(function(){
  let mscroll = $(this).scrollTop();
   console.log(mscroll);
   if(mscroll > 600&& mscroll < 1500){
     $(".i_img01").addClass('s_img');
   }else{
    $(".i_img01").removeClass('s_img');
   }

   if(mscroll > 700&& mscroll < 1500){
    $(".t_intro01").addClass('intro_txt');
  }else{
   $(".t_intro01").removeClass('intro_txt');
  }

  if(mscroll > 900&& mscroll < 1500){
    $(".t_intro02").addClass('intro_txt02');
  }else{
   $(".t_intro02").removeClass('intro_txt02');
  }
  
  });

