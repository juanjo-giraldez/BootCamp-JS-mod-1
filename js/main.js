"use strict";

const completeField = () => {
  document.getElementById("name").value = "Bruce";
  document.getElementById("lastName").value = "Wayne";
  document.getElementById("avatar").src = "assets/bruce-wayne.jpeg";
  console.log(document.getElementById("lastName").value);
};

const removeText = () => {
    document.getElementById("name").value = null;
    document.getElementById("lastName").value = null;
    document.getElementById("avatar").src = null
    console.log('no hay contenido');
  };