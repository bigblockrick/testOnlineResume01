var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#main").append(bio.role);
//$("#main").append(bio.name);

var bio = {
    "name" : "Rick Lima",
    "role" : "Web Developer...",
    "contacts" : {
        "mobile" : "541-951-9558",
        "email" : "rickalima@gmail.com",
        "github" : "BigBlockRick",
        "twitter" : "@RickLima",
        "location" : "Los Gatos, Ca, US"
    },
    "welcomeMessage" : "Welcome to my online resume page.",
    "skills": [
        "Awesomeness ", "HTML5 ", "CSS3 ", "JavaScript"
    ],
    "biopic" : "https://qph.ec.quoracdn.net/main-thumb-166341514-50-guzjkupnkgprsxwqxoosuvrwgbkarmih.jpeg"
     //"images/myImage01.jpg"
};

var education = {
    "schools": [
        {
            "name": "Rogue Community College",
            "location": "Medord, Or, US",
            "degree": "Computer Science",
            "majors": ["Computer Programming", " Business"],
            "dates": "2008-2009",
            "url": "http://www.roguecc.edu/"
        },
        {
            "name": "Southern Oregon University",
            "location": "Ashland, Or, US",
            "degree": "Computer Science",
            "majors": ["Computer Programming", " Computer Security"],
            "dates": "2008-2011",
            "url": "http://www2.sou.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school" : "Udacity",
            "dates" : "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer" : "Cognizant Technology Solutions",
            "title" : "Level III JS Tech",
            "dates" : "09/2016 - current",
            "location" : "San Jose, Ca",
            "description" : "I worked on-ste as a level 2 support tech for Google’s Customer Reviews program. I am part of a team that handles technical issues for merchants in the Customer Reviews program. I troubleshooting the implementation of Google's required JavaScript. I handle these technical issues through email communications."
        },
        {
            "employer" : "Reqroute Inc.",
            "title" : "Level II JS Tech",
            "dates" : "01/2015 - 08/2016",
            "location" : "Mountainview, Ca",
            "description" : "Worked on-site as a level 2 Trusted Stores support technician through ReqRoute, Inc. I am part of a team that handles technical issue regarding for merchants in the Trusted Stores program or attempting to join the program. Most technical issues regard troubleshooting the implementing of Google's required JavaScript for merchants. I handle technical issues through email communication with merchants."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 01",
            "dates": "2017",
            "description": "A couple of projects I worked on.",
            "images": [
                "http://media-cache-ak0.pinimg.com/736x/cd/e3/45/cde345c753eda1b077ca6a17cf46ec9a.jpg",
                "http://media-cache-ak0.pinimg.com/736x/cd/e3/45/cde345c753eda1b077ca6a17cf46ec9a.jpg"
            ]
        }
    ]
};

// ---------------- IF Statement to check if bio object has skills. -----------------
bio.display = function(){
    return welcomeMessage;
};

bio.skills.forEach(function(skill){
    $("#header").append(HTMLskillsStart);

    //var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    formattedSkill = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(formattedSkill);

    //formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    //formattedSkill = HTMLskills.replace("%data%", bio.skills);
    //$("#skills").append(formattedSkill);

    //formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    //formattedSkill = HTMLskills.replace("%data%", bio.skills);
    //$("#skills").append(formattedSkill);

    //formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    //formattedSkill = HTMLskills.replace("%data%", bio.skills);
    //$("#skills").append(formattedSkill);
});
/*
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}
*/
// -------------------------- Display Education ---------------------------------------

education.display = function() {
  for(var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedschoolTitle);

    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschoolDates);

    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedschoolMajor);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);
}
  for(var a = 0; a < education.onlineCourses.length; a++) {
    $("#education").append(HTMLonlineSchool);
    //var formattedschoolName =
    HTMLschoolName.replace("%data%", education.onlineCourses[a].name);

    //var formattedschoolDegree =
    HTMLschoolDegree.replace("%data%", education.onlineCourses[a].degree);
    //var formattedschoolTitle =
    //formattedschoolName + formattedschoolDegree;
    //$(".education-entry:last").append(formattedschoolTitle);

    //var formattedschoolDates =
    HTMLschoolDates.replace("%data%", education.onlineCourses[a].Dates);
    //$(".education-entry:last").append(formattedschoolDates);

    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[a].URL);
    $(".education-entry:last").append(formattedonlineURL);
  }
};
education.display();
// ---------------------- FOR loop for work infor ------------------------------------
//work.display = function()
function displayWork(){
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
//work.display();
displayWork();
// ------------- Displaying My Projects Section ---------------------------------------
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();
//displayProjects();
// ------------ Collecting Clicks ---------------------------------------------------
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

// -------------------- Interneational Mode and Button --------------------------
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

//$('#main').append(internationalizeButton);

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
var googleMap;
$("#mapDiv").append(googleMap);
