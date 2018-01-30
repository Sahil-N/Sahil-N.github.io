$(document).ready(function () {
  var data = [

    {
      id: 0,
      title: "FInd You Music",
      description: "Discover new artists based on music you already listen to.",
      demoUrl: "https://sahil-n.github.io/Find-You-Mu…",
      previewUrl: "http://res.cloudinary.com/tofuguy/image/upload/v1517272094/Screen_Shot_2018-01-29_at_4.27.56_PM_p3hqjd.png",
      category: "all"
    },

    {
      id: 1,
      title: "Local Inventory Manager",
      description: "Built with Node.js HTML & CSS.",
      demoUrl: "https://sahil-n.github.io/New-York-Times-Search-API/",
      previewUrl: "http://res.cloudinary.com/tofuguy/image/upload/v1517271998/Screen_Shot_2018-01-29_at_4.23.37_PM_gcuddg.png",
      category: "all"
    }, 

    {
      id: 2,
      title: "Custom Schedule",
      description: "Manage custom listings: data managed by firebase.",
      demoUrl: "https://sahil-n.github.io/Train-Firebase/",
      previewUrl: "http://res.cloudinary.com/tofuguy/image/upload/v1517270209/Screen_Shot_2018-01-29_at_3.55.27_PM_drr7cb.png",
      category: "all"
    },

    
    {
      id: 3,
      title: "NYT Search API",
      description: "Search for content from the New York Times.",
      demoUrl: "https://sahil-n.github.io/New-York-Times-Search-API/",
      previewUrl: "http://res.cloudinary.com/tofuguy/image/upload/v1517270747/Screen_Shot_2018-01-29_at_4.03.57_PM_wpach7.png",
      category: "all"
    },
    {
      id: 4,
      title: "MSFGA",
      description: "Create and manage volunteer events in SF",
      demoUrl: "https://github.com/samuelboediono/MSFGA",
      previewUrl: "http://res.cloudinary.com/tofuguy/image/upload/v1517272251/body_rirxek.png",
      category: "all"
    }
  ];




  var all = data.filter(function (item) {
    return item.category === 'all';
  });

  var frontend = data.filter(function (item) {
    return item.category === 'frontend';
  });

  var backend = data.filter(function (item) {
    return item.category === 'backend';
  });

  var react = data.filter(function (item) {
    return item.category === 'react';
  });

  var meteor = data.filter(function (item) {
    return item.category === 'meteor';
  });

  function removeActiveClass() {
    $('.center').find('a').each(function (i, el) {
      if ($(el).hasClass('active')) {
        $(el).removeClass('active');
      }
    });
  }
  function removeOpenClass() {
    $('.container').each(function (i, el) {
      if ($(el).hasClass('open')) {
        $(el).removeClass('open');
      }
    });
  }
  $('.js-close').on('click', function (e) {
    e.preventDefault();
    removeActiveClass();
    $('.center').animate({
      opacity: '0'
    }, 100);
    removeOpenClass();
    $('.close-arrow').hide();
  });
  $('.js-open-about').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-about').addClass('active');
  });

  $('.js-open-works').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });

  $('.js-open-contact').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-contact').addClass('active');
  });

  // $('.js-get-email').on('click', function (e) {
  //   e.preventDefault();
  //   swal({
  //     title: 'Enter your E-mail Address to recieve Resume',
  //     input: 'email'
  //   }).then(function (email) {
  //     if (email) {
  //       swal({
  //         type: 'success',
  //         html: 'Entered email: ' + email
  //       });
  //     }
  //   });
  // });

  function generateCard(data) {
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return '<li class="card animated zoomIn"><div class="card-media"><img src=' + imgUrl + ' alt="#" /></div><div class="card-content"><h4>' + title + '</h4><p>' + desc + '</p></div><div class="card-actions"><a target="_blank" href=' + demoUrl + ' class="view-demo">View Demo</a></div></li>';
  }
  function renderToDom(data) {
    data.forEach(function (item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }



  //for intial rendering
  renderToDom(all);
  // renderToDom(frontend); - - - -> original

  function clearDom() {
    $('.js-list').empty();
  }
  $('input[type=radio]').on('change', function (e) {
    switch (e.target.value) {
      case 'all':
        clearDom();
        renderToDom(all);
        break;
        case 'frontend':
        clearDom();
        renderToDom(frontend);
        break;
      case 'backend':
        clearDom();
        renderToDom(backend);
        break;
      case 'react':
        clearDom();
        renderToDom(react);
        break;
      case 'meteor':
        clearDom();
        renderToDom(meteor);
        break;
    }
  });
});

if (document.createElement("p").style.flex === undefined) {
  alert("no flexbox support");
}

$.backstretch(["http://res.cloudinary.com/tofuguy/image/upload/v1517179461/IMG_0687_hdwbdb.jpg", "http://res.cloudinary.com/tofuguy/image/upload/v1517210375/TexturesCom_Murals0020_M_ylz5op.jpg", "http://res.cloudinary.com/tofuguy/image/upload/c_crop,h_1390,x_0/v1517269432/IMG_2663_fo1apu.jpg"], 
{
  duration: 20000,
  fade: 'slow'
});