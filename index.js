// Getting all pages
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");
const sizeDef = {
  city: 1,
  state: 1,
  country: 1,
  skills: 5,
  college: 1,
  introduction: 100,
  whyRds: 100,
  forFun: 100,
  funFact: 100,
  foundFrom: 1,
};

const postUrl = "https://api.realdevsquad.com/users/self/intro";

const inputFields = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

// variables for personal details Page
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const next1 = document.getElementById("next1");
const previous1 = document.getElementById("previous1");

// variables for introduction page
const introduction = document.getElementById("introduction");
const skills = document.getElementById("skills");
const college = document.getElementById("college");
const forFun = document.getElementById("forFun");
const funFact = document.getElementById("funFact");
const next2 = document.getElementById("next2");
const previous2 = document.getElementById("previous2");

//variables for why RDS Page
const whyRds = document.getElementById("whyRds");
const foundFrom = document.getElementById("foundFrom");
const previous3 = document.getElementById("previous3");
const previewBtn = document.getElementById("next3");

//variables for preview pages
const previewFName = document.getElementById("previewFName");
const previewLName = document.getElementById("previewLName");
const previewCity = document.getElementById("previewCity");
const previewState = document.getElementById("previewState");
const previewCountry = document.getElementById("previewCountry");
const previewIntro = document.getElementById("previewIntro");
const previewSkills = document.getElementById("previewSkills");
const previewInstitution = document.getElementById("previewInstitution");
const previewFunFact = document.getElementById("previewFunFact");
const previewForFun = document.getElementById("previewForFun");
const previewWhyRds = document.getElementById("previewWhyRds");
const previewHeardAbout = document.getElementById("previewHeardAbout");
const previous4 = document.getElementById("previous4");
const submit = document.getElementById("next4");

module.exports = {
  page1: page1,
  page2: page2,
  page3: page3,
  page4: page4,
  page5: page5,
  page6: page6,

  sizeDef: sizeDef,
  postUrl: postUrl,
  inputFields: inputFields,
  textAreas: textAreas,

  // variables for personal details Page
  city: city,
  state: state,
  country: country,
  next1: next1,
  previous1: previous1,

  //variables for why RDS Page
  whyRds: whyRds,
  foundFrom: foundFrom,
  previous3: previous3,
  previewBtn: previewBtn,

  //variables for preview pages
  previewFName: previewFName,
  previewLName: previewLName,
  previewCity: previewCity,
  previewState: previewState,
  previewIntro: previewIntro,
  previewSkills: previewSkills,
  previewInstitution: previewInstitution,
  previewFunFact: previewFunFact,
  previewForFun: previewForFun,
  previewWhyRds: previewWhyRds,
  previewHeardAbout: previewHeardAbout,
  submit: submit,
};
