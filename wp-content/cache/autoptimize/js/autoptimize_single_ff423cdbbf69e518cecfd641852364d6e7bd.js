if (!window.clang) {
  window.clang = "en";
}
const BASE_URL = "https://stacktec.net/";
window.translStrings = {
  en: [
    "Thank you! your message has been sent.",
    "We are sending your message",
    "An error has ocurred while sending the message. Please check all fields marked with *.",
  ],
  es: [
    "¡Gracias! Su mensaje ha sido enviado.",
    "Estamos enviando tu mensaje",
    "Ha ocurrido un error al enviar el mensaje. Por favor revise todos los campos marcados con *.",
  ],
  de: [
    "Vielen Dank! Ihre Nachricht wurde an uns übermittelt.",
    "Nachricht wird gesendet.",
    "Während des Versands der Nachricht ist ein Fehler aufgetreten. Bitte füllen Sie alle mit * markierten Felder aus.",
  ],
};
function error_input(error, form) {
  if (!form || !error) {
    return;
  }
  jQuery.each(error, function (index, value) {
    if (value !== "your_name") {
      var input = form.find(".main_frm_fields").find("[name='" + value + "']");
      input.addClass("input_error");
    }
  });
  append_error_bubble();
}
function append_error_bubble(form) {
  if (!form) {
    return;
  }
  form.find(".input_error").each(function (index, value) {
    var itemPos = jQuery(this).position();
    var itemTop = itemPos.top;
    var itemLeft = itemPos.left;
    var itemWidth = jQuery(this).width();
  });
}
function reset_errors() {
  jQuery(".input_error").each(function () {
    jQuery(this).removeClass("input_error");
  });
  jQuery(".input_error_bubble").each(function () {
    jQuery(this).remove();
  });
}
function uniqId() {
  return Math.round(new Date().getTime() + Math.random() * 100);
}
function hide_user_notification(item) {
  item.click(function () {
    item.remove();
  });
}
function success_form_script() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit",
    label: "onlineform",
    category: "leads",
    action: "form_submitted",
  });
}
function aad_form_transl_string(string) {
  var translStrings = window.translStrings;
  var lang = window.clang;
  if (lang == "en") {
    var engStrings = translStrings["en"];
    var stringIndex = translStrings["es"].findIndex(
      (element) => element == string
    );
    return engStrings[stringIndex];
  } else if (lang == "de") {
    var engStrings = translStrings["de"];
    var stringIndex = translStrings["es"].findIndex(
      (element) => element == string
    );
    return engStrings[stringIndex];
  } else {
    return string;
  }
}
function user_notification(type, error, form) {
  error = error || null;
  var statusCont = jQuery(".aad_status_msg").remove();
  var statusCont = jQuery("#aad_form_status_msg").find(".inner_container");
  jQuery("#aad_form_status_msg").addClass("show");
  var lang = clang;
  if (type == "success") {
    var sucessId = uniqId();
    statusCont.append(
      '<div id="' +
        sucessId +
        '" class="aad_status_msg success">' +
        aad_form_transl_string("¡Gracias! Su mensaje ha sido enviado.") +
        "</div>"
    );
    jQuery("#" + sucessId).addClass("show");
    hide_user_notification(jQuery("#" + sucessId));
  } else if (type == "process") {
    var processId = uniqId();
    statusCont.append(
      '<div id="' +
        processId +
        '" class="aad_status_msg">' +
        aad_form_transl_string("Estamos enviando tu mensaje") +
        "</div>"
    );
    jQuery("#" + processId).addClass("show");
    hide_user_notification(jQuery("#" + processId));
  } else if (type == "error") {
    var errorId = uniqId();
    statusCont.append(
      '<div id="' +
        errorId +
        '" class="aad_status_msg error">' +
        aad_form_transl_string(
          "Ha ocurrido un error al enviar el mensaje. Por favor revise todos los campos marcados con *."
        ) +
        "</div>"
    );
    hide_user_notification(jQuery("#" + errorId));
    jQuery("#" + errorId).addClass("show");
    if (error != null) {
      if (error == "accept") {
        form.find(".accept_check").addClass("input_error");
      }
      error_input(error, form);
    }
  }
}
function prepare_and_send(inputs, selects, form) {
    if (form.find(".wpink_frm_accept").prop("checked")) {
      var privacy = 1;
    } else {
      var privacy = 0;
    }
    var token = form.find(".wpink_frm_token").val();
    var type = form.find(".wpink_frm_type").val();
    var data = {
      action: "aad_procesar_form",
      frm_token: token,
      frm_type: type,
      frm_accept: privacy,
    };
    inputs.each(function (index, value) {
      var key = jQuery(this).attr("name");
      data[key] = jQuery(this).val();
    });
    selects.each(function (index, value) {
      var key = jQuery(this).attr("name");
      data[key] = jQuery(this).val();
    });
    if (form.find(".wp_ink_frm_message").length) {
      data["frm_message"] = jQuery(".wp_ink_frm_message").val();
    }
    if (form.find(".wp_ink_frm_experience").length) {
      data["frm_experience"] = jQuery(".wp_ink_frm_experience").val();
    }
    var accepts = form.find(".wpink_frm_accept").length;
    window.accepted = 0;
    form.find(".wpink_frm_accept").each(function () {
      if (jQuery(this).prop("checked")) {
        window.accepted += 1;
      }
    });
    if (form.find(".wpink_frm_accept_comm").prop("checked")) {
      var comm = 1;
      data["commercial"] = comm;
    } else {
      var comm = 0;
      data["commercial"] = comm;
    }
    if (form.find(".wpink_frm_pid").length) {
      data["frm_product"] = jQuery(".wpink_frm_pid").val();
    }
    if (accepts == window.accepted) {
      user_notification("process", "", form);
      reset_errors();
      Email.send({
        Host: "smtp.gmail.com",
        Username: "cdsb.muaadh@gmail.com",
        Password: "Star#vil13",
        To: "cdsb.muaadh@gmail.com",
        From: "cdsb.muaadh@gmail.com",
        Subject: "Form Submission",
        Body: JSON.stringify(data),
      }).then(function (message) {
        if (message === "OK") {
          success_form_script();
          user_notification("success", "", form);
        } else {
          user_notification("error", message, form);
        }
      });
    } else {
      user_notification("error", "accept", form);
    }
  }





function install_form(form) {
  form.find(".aad_frm_submit").click(function (event) {
    event.preventDefault();
    var inputs = form.find(".main_frm_fields").find("input");
    var selects = form.find(".main_frm_fields").find("select");
    prepare_and_send(inputs, selects, form);
  });
}
jQuery(document).ready(function () {
  jQuery("form.aadcf_contact_form").each(function () {
    install_form(jQuery(this));
  });
});
