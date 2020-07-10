
// var sections = document.querySelectorAll('.main-navigation a');
// for(var i=0;i<sections.length;i++)
// {
//     if(sections[i] != null)
//     {
//         sections[i].addEventListener('click',function(){
//             event.preventDefault();
//             var targetSectionId = this.textContent.trim().toLowerCase();
//             var targetSection = document.getElementById(targetSectionId);

//             var interval = setInterval(function()
//             {
//                 var targetSectionCoordinate = targetSection.getBoundingClientRect();
//                 console.log(targetSection)
//                 if(targetSectionId == 'contact')
//                 {
//                     if(targetSectionCoordinate.top <= 300)
//                     {
//                         clearInterval(interval);
//                         return;
//                     }
//                 }
//                 if(targetSectionCoordinate.top <= 0)
//                 {
//                     clearInterval(interval);
//                     return;
//                 }
//                 window.scrollBy(0,50);
//             },20);
//         });
//     }
// }

//another way of writing the above code by modularize scroll in section separarte function
var sections = document.querySelectorAll('.main-navigation a');
var interval;
for(var i=0;i<sections.length;i++)
{
    if(sections[i] != null)
    {
        sections[i].addEventListener('click',function(){
            event.preventDefault();
            var targetSectionId = this.textContent.trim().toLowerCase();
            var targetSection = document.getElementById(targetSectionId);
            interval = setInterval(scrollVertically, 20, targetSection,targetSectionId);//last two are parameter to first fucntion
        });
    }
}

function scrollVertically(targetSection,targetSectionId)
{
    {
        var targetSectionCoordinate = targetSection.getBoundingClientRect();
        console.log(targetSection)
        if(targetSectionId == 'contact')
        {
            if(targetSectionCoordinate.top <= 300)
            {
                clearInterval(interval);
                return;
            }
        }
        if(targetSectionCoordinate.top <= 0)
        {
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    }
}


//for progress bar

var progressBar = document.querySelectorAll('.skills-progress div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars()
{
    for(let bar of progressBar)
    {
        bar.style.width = 0 +'%';
    }
}

initialiseBars();

function fillBars()
{
    for(let bar of progressBar)
    {
        console.log('bars');
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function()
        {
            if(currentWidth >= targetWidth)
            {
                clearInterval(interval);
            }
            currentWidth++;
            console.log("printed");
            bar.style.width = currentWidth +'%';
        },5);
    }
}
function checkScroll()
{
    var coordinate = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinate.top + 300 <= window.innerHeight)
    {
        console.log("skills reached");
        fillBars();
        animationDone = true;
    } 
    else if(coordinate.top >= window.innerHeight)
    {
        animationDone = false;
    }  
}