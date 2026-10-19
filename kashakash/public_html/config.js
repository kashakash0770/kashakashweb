// Edit this one file to change SwitchLab details on every page.
window.COHORT = {
  name: "SwitchLab",
  start: "2026-11-01",          // YYYY-MM-DD
  days: 90,
  formUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM_LINK",
  whatsappUrl: "https://chat.whatsapp.com/Fc5KWt6gnz05NIDgesYHXK"
};
(function(){
  var c = window.COHORT, s = new Date(c.start + "T00:00:00"), e = new Date(s);
  e.setDate(e.getDate() + c.days - 1);
  var f = function(d){ return d.toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}); };
  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("[data-c]").forEach(function(el){
      var k = el.dataset.c;
      if (k==="start") el.textContent = f(s);
      if (k==="end") el.textContent = f(e);
      if (k==="days") el.textContent = c.days;
      if (k==="name") el.textContent = c.name;
    });
    document.querySelectorAll("[data-form]").forEach(function(a){ a.href = c.formUrl; });
    document.querySelectorAll("[data-wa]").forEach(function(a){ a.href = c.whatsappUrl; });
  });
})();
