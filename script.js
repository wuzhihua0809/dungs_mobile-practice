$(document).ready(function() {
	const li = $('li');
	const company = $('#company');
	const solution = $('#solution');
	const products = $('#products');
	const additional = $('#additional');
	const service = $('#service');
	const companycontent = $('.company-content');
	const solutioncontent = $('.solution-content');
	const productscontent = $('.products-content');
	const additionalcontent = $('.additional-content');
	const servicecontent = $('.service-content');
	$('.main').css('min-height',$(window).height());
    li.on('click',function(){
    	$(this).addClass('active');
    	$(this).find('a').addClass('active');
    	$(this).find('span').addClass('active');
    	setTimeout(function(){
            $('li').removeClass('active');
	    	$('a').removeClass('active');
	    	$('span').removeClass('active'); }, 500);
    });
    company.on('click',function(){
    	company.find('.mark-icon').removeClass('active');
		solution.find('.mark-icon').removeClass('active');
		products.find('.mark-icon').removeClass('active');
		additional.find('.mark-icon').removeClass('active');
		service.find('.mark-icon').removeClass('active');
    	if (companycontent.hasClass('active')) {
    		companycontent.removeClass('active');
    	} else{
    		companycontent.addClass('active');
    		solutioncontent.removeClass('active');
    		productscontent.removeClass('active');
    		additionalcontent.removeClass('active');
    		servicecontent.removeClass('active');
    		company.find('.mark-icon').addClass('active');
    	};
    })
    solution.on('click',function(){
    	company.find('.mark-icon').removeClass('active');
		solution.find('.mark-icon').removeClass('active');
		products.find('.mark-icon').removeClass('active');
		additional.find('.mark-icon').removeClass('active');
		service.find('.mark-icon').removeClass('active');
    	if (solutioncontent.hasClass('active')) {
    		solutioncontent.removeClass('active');
    	} else{
    		companycontent.removeClass('active');
    		solutioncontent.addClass('active');
    		productscontent.removeClass('active');
    		additionalcontent.removeClass('active');
    		servicecontent.removeClass('active');
    		solution.find('.mark-icon').addClass('active');
    	};
    })
    products.on('click',function(){
    	company.find('.mark-icon').removeClass('active');
		solution.find('.mark-icon').removeClass('active');
		products.find('.mark-icon').removeClass('active');
		additional.find('.mark-icon').removeClass('active');
		service.find('.mark-icon').removeClass('active');
    	if (productscontent.hasClass('active')) {
    		productscontent.removeClass('active');
    	} else{
    		companycontent.removeClass('active');
    		solutioncontent.removeClass('active');
    		productscontent.addClass('active');
    		additionalcontent.removeClass('active');
    		servicecontent.removeClass('active');
    		products.find('.mark-icon').addClass('active');
    	};
    })
    additional.on('click',function(){
    	company.find('.mark-icon').removeClass('active');
		solution.find('.mark-icon').removeClass('active');
		products.find('.mark-icon').removeClass('active');
		additional.find('.mark-icon').removeClass('active');
		service.find('.mark-icon').removeClass('active');
    	if (additionalcontent.hasClass('active')) {
    		additionalcontent.removeClass('active');
    	} else{
    		companycontent.removeClass('active');
    		solutioncontent.removeClass('active');
    		productscontent.removeClass('active');
    		additionalcontent.addClass('active');
    		servicecontent.removeClass('active');
    		additional.find('.mark-icon').addClass('active');
    	};
    })
    service.on('click',function(){
    	company.find('.mark-icon').removeClass('active');
		solution.find('.mark-icon').removeClass('active');
		products.find('.mark-icon').removeClass('active');
		additional.find('.mark-icon').removeClass('active');
		service.find('.mark-icon').removeClass('active');
    	if (servicecontent.hasClass('active')) {
    		servicecontent.removeClass('active');
    	} else{
    		companycontent.removeClass('active');
    		solutioncontent.removeClass('active');
    		productscontent.removeClass('active');
    		additionalcontent.removeClass('active');
    		servicecontent.addClass('active');
    		service.find('.mark-icon').addClass('active');
    	};
    })
});