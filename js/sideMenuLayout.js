window.onload = () => {

    console.log("locked and loaded");


    let months = ['january','february','march','april','may','june','july','august','september','october','november','december'];


    let monthSelector = document.querySelector('#monthSelector');

    monthSelector.addEventListener('change', () => {

        console.log('changed');

        let randomNumberOne = Math.round(Math.random() * 100,2);

        document.querySelector('#rap').rows[1].cells[1].innerHTML = randomNumberOne +'.05%';
        console.log(randomNumberOne);

        document.querySelector('#rap').rows[1].cells[3].innerHTML = Math.floor(Math.random() * 100,2);

        document.querySelector('#rap').rows[1].cells[4].innerHTML = Math.round(Math.random() * 100,2) + '%';


        document.querySelector('#cht').rows[1].cells[1].innerHTML =   Math.floor(Math.random() * 10,2);

        document.querySelector('#cht').rows[1].cells[3].innerHTML = Math.round(Math.random() * 100,2);

        document.querySelector('#cht').rows[1].cells[4].innerHTML = Math.round(Math.random() * 100,2) + '%';

        
    });

}

// document.querySelector("#showModal").addEventListener('click' , () => {

//     console.log("clicked");

//     document.querySelector('.modalContainer').style.display = "grid";

// });

// document.querySelector('#modalClose i').addEventListener('click', () => {

//     document.querySelector('.modalContainer').style.display = "none";


// });

// $(document).ready( function () {
//     $('#rap').DataTable({
        
// 		data : [['85.64%','84.05%','-1.85%','3','50%','5']],
//         lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'All']],
//         colReorder: false,

// 		columns : [
// 			{title : "RAP Goal"},	
// 			{title : "RAP Achieved"},
// 			{title : "RAP Variance"},
// 			{title : "RAP Points"},
// 			{title : "RAP Team Met %"},
// 			{title : "RAP Team Met Points"},
			
			
// 	    ]
//     });

//     $('#cht').DataTable({
        
// 		data : [['85.64%','84.05%','-1.85%','3','50%','5']],
// 		lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'All']],
// 		columns : [
// 			{title : "CHT Goal"},	
// 			{title : "CHT Achieved"},
// 			{title : "CHT Variance"},
// 			{title : "CHT Points"},
// 			{title : "CHT Team Met %"},
// 			{title : "CHT Team Met Points"},
			
			
// 	    ]
//     });

// });
// document.querySelector')


