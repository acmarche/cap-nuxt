<template>
  <section class="flex flex-col gap-2 px-4">
    <h1 class="text-2xl font-pathway-semi-bold">Devenez membre de CAP</h1>
    <h2 class="text-xl font-pathway-semi-bold uppercase">Envie de devenir membre? Nous sommes là pour vous !</h2>
    <p class="contactP">Contactez l'équipe de Cap sur Marche pour lui poser toutes les questions relatives à la
      plateforme que vous pourriez avoir rencontré.</p>
    <form method="post">
      <div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-row">
            <label for="nameInput">Votre nom :</label>
            <div class=" ">
              <input id="nameInput" type="text" placeholder="Prénom"
                     class="" value="">
              <div class="requiredField">*</div>
              <div class="">
                <div><span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">
                    Ce champ ne peut pas être vide</span>
                </div>
              </div>
            </div>
            <div class="genericInputBulle inputBulleContainer">
              <input id="lastNameInput" type="text"
                     placeholder="Nom de famille"
                     class="genericInputBulleField" value="">
              <div class="requiredField">*</div>
              <div class="infobulle">
                <div><span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">
                    Ce champ ne peut pas être vide</span>
                </div>
              </div>
            </div>
          </div>
          <div class="inputContainer inputBulleContainer genericInputBulle">
            <label for="companyInput">Votre entreprise
              :</label>
            <input id="companyInput" type="text" placeholder="Nom de votre entreprise" value="">
          </div>
          <div class="inputContainer inputBulleContainer genericInputBulle">
            <label for="addressInput">Adresse :</label>
            <input id="addressInput" type="text" placeholder="Rue et numéro" class="genericInputBulleField"
                   value="">
            <div class="infobulle">
              <div><span class="infobulleIcon"></span>
                <span class="errorText" style="display: none;">Ce champ ne peut pas être vide</span>
              </div>
            </div>
          </div>
          <div class="inputContainer inputBulleContainer duoContainer">
            <label for="zipcodeInput">Localité :</label>
            <div class="genericInputBulle inputBulleContainer">
              <input id="zipcodeInput" type="text"
                     placeholder="Code postal"
                     class="genericInputBulleField" value="">

              <div class="infobulle">
                <div><span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">Ce champ ne peut pas être vide</span>
                </div>
              </div>
            </div>
            <div class="genericInputBulle inputBulleContainer">
              <input id="localityInput" type="text"
                     placeholder="Ville"
                     class="genericInputBulleField" value="">
              <div class="infobulle">
                <div><span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">Ce champ ne peut pas être vide</span>
                </div>
              </div>
            </div>
          </div>
          <div class="inputContainer inputBulleContainer genericInputBulle">
            <label for="countryInput-button" class="correctionLabel">Pays :</label>
            <select id="countryInput" name="countryInput" style="display: none;">
              <option value="Belgique" data-country-id="18" selected="selected">Belgique</option>
              <option value="France" data-country-id="75">France</option>
              <option value="Luxembourg" data-country-id="128">Luxembourg</option>
            </select>
            <span class="ui-selectmenu-button ui-widget ui-state-default ui-corner-all" tabindex="0"
                  id="countryInput-button" role="combobox" aria-expanded="false" aria-autocomplete="list"
                  aria-owns="countryInput-menu" aria-haspopup="true" aria-activedescendant="ui-id-1"
                  aria-labelledby="ui-id-1" aria-disabled="false" style="width: 726px;"><span
                class="ui-icon ui-icon-triangle-1-s"></span>
                <span class="ui-selectmenu-text">Belgique</span>
              </span>

          </div>
        </div>
        <div class="inlineBlockTop halfBlock">
          <div class="inputContainer inputBulleContainer genericInputBulle textareaInputBulle">
            <label for="contentTextarea">Votre message :</label>
            <textarea name="contentTextarea" id="contentTextarea"
                      placeholder="Entrez votre message ici" cols="30"
                      rows="10" class="genericInputBulleField"
                      value="">
              </textarea>
            <div class="requiredField">*</div>
            <div class="infobulle">
              <div>
                <span class="infobulleIcon"></span>
                <span class="errorText" style="display: none;">Ce champ ne peut pas être vide</span>
              </div>
            </div>
          </div>
          <div class="inputContainer inputBulleContainer">
            <div class="genericInputBulle fullsizeEmailInput">
              <input id="emailInput" type="text"
                     placeholder="Adresse e-mail"
                     data-validation="email"
                     class="genericInputBulleField" value="">
              <div class="requiredField">*</div>
              <div class="infobulle">
                <div>
                  <span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">
                    Ce champ doit contenir une adresse mail valide
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="inputContainer trueDuoContainer">
            <div class="genericInputBulle inputBulleContainer">
              <input id="phoneInput" type="text"
                     placeholder="Numéro de téléphone"
                     data-validation="phone"
                     class="genericInputBulleField" value="">
              <div class="infobulle">
                <div><span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">
                    Ce champ doit contenir un numéro de téléphone valide</span>
                </div>
              </div>
            </div>
            <div class="genericInputBulle inputBulleContainer">
              <input id="faxInput" type="text" placeholder="Fax"
                     data-validation="phone"
                     class="genericInputBulleField" value="">
              <div class="infobulle">
                <div>
                  <span class="infobulleIcon"></span>
                  <span class="errorText" style="display: none;">
                    Ce champ doit contenir un numéro de téléphone valide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inputContainer rightAlignContainer genericInputBulle">
          <label for="checkboxNewsletter">
            Je désire m’abonner à la newsletter</label>
          <div class="checkBlock">
            <input id="checkboxNewsletter" type="checkbox">
            <span class="blueV"></span>
            <span class="emptyCheck"></span>
          </div>
        </div>
        <div class="inputContainer rightAlignContainer">
          <button type="button" id="sendButton" class="blockLink iconLink sendButton">Envoyer le formulaire</button>
        </div>
      </div>
      <div id="contactFeedbackBlock" style="display: none">
        <div class="inlineBlockMiddle">
          <img src="https://cap.marche.be/templates/commercio/resources/contactFeedback.png" width="137" height="137"
               alt="Contact feedback picture">
        </div>
        <div class="inlineBlockMiddle">
          <h2>Votre message a bien été envoyé !</h2>
          <p>Un e-mail de confirmation vous a été transmis.</p>
          <p>Nous vous contacterons dans les plus brefs délais afin de répondre à votre demande. Merci de la confiance
            que vous accordez à notre équipe.</p>
        </div>
      </div>
    </form>
  </section>
</template>