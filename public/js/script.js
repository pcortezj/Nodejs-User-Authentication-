$(document).ready(function () {

// var value = $('radId').val();

// $('input[name="bool"]').on(change(function(){
// 	if(value == '1'){
// 		$('img').attr('src', '/img/full.png')
// 	}
// 	else if (value == 2){
// 		$('img').attr('src', '/img/half.png')
// 	}
// 	else{
// 		$('img').attr('src','/img/full.png')
// 	}
// });


 $('input[name="bool"]').on('change', function(){
            localStorage.setItem('radId', this.id);
         });

        if(localStorage.getItem("radId") !== null){
            var id = localStorage.getItem("radId");
            $('#'+id).prop('checked', true);
        }

        $('input[name="bool2"]').on('change', function(){
            localStorage.setItem('radId2', this.id);
        });

        if(localStorage.getItem("radId2") !== null){
            var id = localStorage.getItem("radId2");
            $('#'+id).prop('checked', true);
        }
        $('input[name="bool3"]').on('change', function(){
            localStorage.setItem('radId3', this.id);
        });

        if(localStorage.getItem("radId3") !== null){
            var id = localStorage.getItem("radId3");
            $('#'+id).prop('checked', true);
        }

        $('input[name="bool4"]').on('change', function(){
            localStorage.setItem('radId4', this.id);
        });

        if(localStorage.getItem("radId4") !== null){
            var id = localStorage.getItem("radId4");
            $('#'+id).prop('checked', true);
        }        

        $('input[name="bool5"]').on('change', function(){
            localStorage.setItem('radId', this.id);
        });

        if(localStorage.getItem("radId5") !== null){
            var id = localStorage.getItem("radId5");
            $('#'+id).prop('checked', true);
        }

        $('input[name="bool6"]').on('change', function(){
                    localStorage.setItem('radId6', this.id);
                });

                if(localStorage.getItem("radId6") !== null){
                    var id = localStorage.getItem("radId6");
                    $('#'+id).prop('checked', true);
                }

        $('input[name="bool7"]').on('change', function(){
                    localStorage.setItem('radId7', this.id);
                });

                if(localStorage.getItem("radId7") !== null){
                    var id = localStorage.getItem("radId7");
                    $('#'+id).prop('checked', true);
                }

        $('input[name="bool8"]').on('change', function(){
                    localStorage.setItem('radId8', this.id);
                });

                if(localStorage.getItem("radId8") !== null){
                    var id = localStorage.getItem("radId8");
                    $('#'+id).prop('checked', true);
                }


        $('input[name="bool9"]').on('change', function(){
                    localStorage.setItem('radId9', this.id);
                });

                if(localStorage.getItem("radId9") !== null){
                    var id = localStorage.getItem("radId9");
                    $('#'+id).prop('checked', true);
                }

        $('input[name="bool10"]').on('change', function(){
                    localStorage.setItem('radId10', this.id);
                });

                if(localStorage.getItem("radId10") !== null){
                    var id = localStorage.getItem("radId10");
                    $('#'+id).prop('checked', true);
                }

        $('input[name="bool11"]').on('change', function(){
                    localStorage.setItem('radId11', this.id);
                });

                if(localStorage.getItem("radId11") !== null){
                    var id = localStorage.getItem("radId11");
                    $('#'+id).prop('checked', true);
                }

	});