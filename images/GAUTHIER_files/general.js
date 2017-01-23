// Gestion des messages multilingues

function message(num,lg)
{
  var msg = new Array(4);
  for(var i=0; i < msg.length; i++)
  msg[i]=new Array(6);

  msg[0]['FR'] = "Merci de renseigner les champs obligatoires.";
  msg[0]['EN'] = "Merci de renseigner les champs obligatoires. [EN]";
  msg[0]['ES'] = "Merci de renseigner les champs obligatoires. [ES]";
  msg[0]['DE'] = "Merci de renseigner les champs obligatoires. [DE]";
  msg[0]['IT'] = "Merci de renseigner les champs obligatoires. [IT]";
  msg[0]['PO'] = "Merci de renseigner les champs obligatoires. [PO]";
  
  msg[1]['FR'] = "Merci de renseigner les champs de connexion.";
  msg[1]['EN'] = "Merci de renseigner les champs de connexion. [EN]";
  msg[1]['ES'] = "Merci de renseigner les champs de connexion. [ES]";
  msg[1]['DE'] = "Merci de renseigner les champs de connexion. [DE]";
  msg[1]['IT'] = "Merci de renseigner les champs de connexion. [IT]";
  msg[1]['PO'] = "Merci de renseigner les champs de connexion. [PO]";

  msg[2]['FR'] = "Veuillez vérifier le format de votre adresse e-mail.";
  msg[2]['EN'] = "Veuillez vérifier le format de votre adresse e-mail. [EN]";
  msg[2]['ES'] = "Veuillez vérifier le format de votre adresse e-mail. [ES]";
  msg[2]['DE'] = "Veuillez vérifier le format de votre adresse e-mail. [DE]";
  msg[2]['IT'] = "Veuillez vérifier le format de votre adresse e-mail. [IT]";
  msg[2]['PO'] = "Veuillez vérifier le format de votre adresse e-mail. [PO]";

  msg[3]['FR'] = "Les champs 'Mot de passe' et 'Confirmation mot de passe' ne sont pas identiques.";
  msg[3]['EN'] = "Les champs 'Mot de passe' et 'Confirmation mot de passe' ne sont pas identiques. [EN]";
  msg[3]['ES'] = "Les champs 'Mot de passe' et 'Confirmation mot de passe' ne sont pas identiques. [ES]";
  msg[3]['DE'] = "Les champs 'Mot de passe' et 'Confirmation mot de passe' ne sont pas identiques. [DE]";
  msg[3]['IT'] = "Les champs 'Mot de passe' et 'Confirmation mot de passe' ne sont pas identiques. [IT]";
  msg[3]['PO'] = "Les champs 'Mot de passe' et 'Confirmation mot de passe' ne sont pas identiques. [PO]";
  
  return msg[num][lg] ;
}

// Vérifie qu'une checkbox est cochée
function isChecked(cb,lg) {
  if (cb.checked == true) {
    return true;  
  }
  msg = message(0,lg);
  alert(msg);
  return false;
}

// Vérifie qu'une radiobox est cochée
function isRadioChecked(rb,lg){
	var n = rb.length;
	for (var i=0;i<n;i++){
		if (rb[i].checked){
			return true; 
		}
	}
	msg = message(0,lg);
    alert(msg);
	return false;
}


// Vérifie si un champ a bien été renseigné
function isNotEmpty(elem,lg) {
	var str = elem.value;
    var re = /.+/;
    if(!str.match(re)) {
        msg = message(0,lg);
        alert(msg);
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}

// Vérifie si un champ d'un espace de connexion a bien été renseigné (message alerte différent)
function isNotEmptyConnexion(elem,lg) {
	var str = elem.value;
    var re = /.+/;
    if(!str.match(re)) {
		msg = message(1,lg);
        alert(msg);
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}


// Vérifie si l'adresse e-mail est valide
function isEMailAddr(elem,lg) {
	var str = elem.value;
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!str.match(re)) {
       	msg = message(2,lg);
        alert(msg);
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}

// Vérifie si 2 champs ont la même valeur
function isSame(elem1,elem2,lg) {
	var str1 = elem1.value;
	var str2 = elem2.value;
    
    if (str1!=str2) {
        msg = message(3,lg);
        alert(msg);
        return false;
    }
    return true;
}

//Vérifie si un champ ne contient que des chiffres
function isNumber(elem) {
	var str = elem.value;
    var re = /^[-]?\d*\.?\d*$/;
    str = str.toString();
    if (!str.match(re)) {
        alert("");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    }
    return true;
}

// Vérifie si un champ contient 8 caractères
function isLen8(elem) {
	var str = elem.value;
    var re = /\b.{8}\b/;
    if (!str.match(re)) {
        alert("");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}

function textLimit(elem, maxlen) {
   if (elem.value.length > maxlen) {
      elem.value = elem.value.substring(0, maxlen);
   }
}

// Positionne le curseur dans un champ donné
function focusElement(formName, elemName) {
    var elem = document.forms[formName].elements[elemName];
    elem.focus();
    elem.select();
}


function VerifMasque(idObjet, Masque)
{
	var oSaisie = document.getElementById(idObjet);
	if (oSaisie != null)
	{
		var sVal = new String(oSaisie.value);
		if (sVal != '' && sVal.match(Masque) == null)
		{
			oSaisie.value = '';
			oSaisie.focus();
		}
	}
}


// Fonction Pop Up
gk=window.Event?1:0; // Navigateurs Gecko ou IE
D=document;popup=encours=0

function pop_up(e)
{
	de=!D.documentElement.clientWidth?D.body:D.documentElement // IE6
	sx=gk?pageXOffset:de.scrollLeft //scroll h
	sy=gk?pageYOffset:de.scrollTop //scroll v
	x=gk?e.pageX:event.clientX+sx; //curseur x
	y=gk?e.pageY:event.clientY+sy; //curseur y
	el=gk?e.target:event.srcElement;
	if(!el.tagName)el=el.parentNode; // noeud #text
	if(el.className == 'pop')
	  {
	  popup = D.getElementById(el.href.substring(el.href.lastIndexOf('#') + 1)).style; 
	  if(popup!=encours) // seulement si changement  
		{
		encours.display='none';
		with(popup){display="block";left=x+'px';top=y+10+'px';}
		encours=popup;
		}
	  } else {encours.display='none';encours=0}
}
D.onmousemove=pop_up


function favoris(titre,url) {
if ( navigator.appName != 'Microsoft Internet Explorer' )
{ window.sidebar.addPanel(titre,"http://"+url,""); }
else { window.external.AddFavorite("http://"+url,titre); } }