// Validation formulaire newsletter
function frm_contact_valide(form,lg) {
	if (isRadioChecked(form.civilite,lg)){
		if (isNotEmpty(form.nom,lg)){
			if (isNotEmpty(form.prenom,lg)){
				if (isNotEmpty(form.email,lg)){
					if (isNotEmpty(form.adresse,lg)){
						if (isNotEmpty(form.cp,lg)){
							if (isNotEmpty(form.ville,lg)){
								if (isNotEmpty(form.message,lg)){
									if (isEMailAddr(form.email,lg)){
										return true;
									}
								}
							}
						}
					}
				}			
			}
		}
	}
	return false;
}

// Validation formulaire newsletter
function frm_newsletter_abonne_valide(form,lg) {
	if (isEMailAddr(form.email,lg)){
		return true;
	}
	return false;
}