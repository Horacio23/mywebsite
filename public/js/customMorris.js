$(document).ready(function(){
    $('.heading h3').addClass('prepTransition');

    Morris.Donut({
      element: 'graph',
      data: [
        {value: 35, label: 'Java', id:'java'},
        {value: 15, label: 'Hadoop', id:'hadoop'},
        {value: 17, label: 'Javascript', id:'js'},
        {value: 13, label: 'Web Services', id:'webServices'},
        {value: 5, label: 'Docker', id:'docker'},
        {value: 10, label: 'Go', id:'go'},
        {value: 5, label: 'Googling', id:'googling'},
      ],
      backgroundColor: '#fff',
      labelColor: 'black',
      colors: [
        '#F89820',
        '#0055A6',
        '#E1E807',
        '#0BA462',
        '#0db7ed',
        '#BA9F4E',
        '#95D7BB'
      ],
      formatter: function (x,data) {
          highlightSkill(data["id"]);
          return x + "%";
      }
    });
});

//highlights the example for the current skill selected in the donut
function highlightSkill(skill){
    $('.heading h3').removeClass("hightlightExperience")
    $('[skills*='+skill+']').addClass("hightlightExperience")

}
